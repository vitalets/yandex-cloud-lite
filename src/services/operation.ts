import * as jspb from 'google-protobuf';
import { OperationServiceClient } from '../../generated/yandex/cloud/operation/operation_service_grpc_pb';
import { Operation } from '../../generated/yandex/cloud/operation/operation_pb';
import { GrpcPromisedClient } from '../helpers/grpc-promisify';
import { backOff, IBackOffOptions } from 'exponential-backoff';
import { Session } from '../session';

export type WaitOperationOptions = Partial<IBackOffOptions>;

const OPERATION_NOT_DONE = 'operation-not-done';

export class OperationService {
  api: GrpcPromisedClient<OperationServiceClient>;

  constructor(public session: Session) {
    this.api = session.createClient(OperationServiceClient);
  }

  async wait<T extends typeof jspb.Message>(
    operation: Operation,
    responseClass: T,
    options: WaitOperationOptions = {}
  ) {
    return new WaitOperation(this.api, operation, responseClass, options).run();
  }
}

/**
 * Waits untils operation done.
 */
export class WaitOperation<T extends typeof jspb.Message> {
  constructor(
    private client: GrpcPromisedClient<OperationServiceClient>,
    private operation: Operation,
    private OperationResponseMetadata: T,
    private options: WaitOperationOptions = {}
  ) { }

  async run() {
    const backOffOptions = this.getBackoffOptions();
    const fn = () => this.checkOperationStatus();
    await backOff(fn, backOffOptions);
    this.checkError();
    return this.buildResponse();
  }

  private async checkOperationStatus() {
    this.operation = await this.client.get({ operationId: this.operation.getId() });
    if (!this.operation.getDone()) throw new Error(OPERATION_NOT_DONE);
  }

  private checkError() {
    const error = this.operation.getError();
    if (error) throw new Error(`${error.getMessage()} (code: ${error.getCode()})`);
  }

  private buildResponse() {
    const response = this.operation.getResponse();
    if (!response) throw new Error(`Empty response for operation: ${this.operation.getId()}`);
    return this.OperationResponseMetadata.deserializeBinary(response.getValue_asU8()) as InstanceType<T>;
  }

  private getBackoffOptions(): Partial<IBackOffOptions> {
    return {
      retry: e => e.message === OPERATION_NOT_DONE,
      ...this.options,
    };
  }
}
