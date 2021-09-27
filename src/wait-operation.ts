import * as jspb from 'google-protobuf';
import { OperationServiceClient } from '../generated/yandex/cloud/operation/operation_service_grpc_pb';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { GrpcPromisedClient } from './promisify';
import { sleep } from './utils';

export interface WaitOperationOptions {
  timeout?: number;
  maxDelay?: number;
  minDelay?: number;
}

const defaults = {
  timeout: 30000,
  maxDelay: 5000,
  minDelay: 100,
};

/**
 * Waits untils operation finishes.
 */
export class WaitOperation<ResponseClass extends typeof jspb.Message> {
  private options: Required<WaitOperationOptions>;
  private timer?: ReturnType<typeof setTimeout>;
  private isTimeout = false;
  private delay: number;

  constructor(
    private client: GrpcPromisedClient<OperationServiceClient>,
    private operation: Operation,
    private responseClass: ResponseClass,
    options?: WaitOperationOptions
  ) {
    this.options = Object.assign({}, defaults, options);
    this.delay = this.options.minDelay;
  }

  async run() {
    this.startTimer();
    try {
      do {
        this.checkError();
        this.checkTimeout();
        // eslint-disable-next-line max-depth
        if (this.operation.getDone()) return this.buildResponse();
        await this.sleep();
        await this.updateOperationStatus();
      } while (true);
    } finally {
      this.clearTimer();
    }
  }

  private startTimer() {
    this.timer = setTimeout(() => this.isTimeout = true, this.options.timeout);
  }

  private clearTimer() {
    this.timer && clearTimeout(this.timer);
  }

  private checkError() {
    const error = this.operation.getError();
    if (error) {
      throw new Error(`${error.getMessage()} (code: ${error.getCode()})`);
    }
  }

  private checkTimeout() {
    if (this.isTimeout) {
      throw new Error(
        `Timeout ${this.options.timeout} ms exceeded for operation : ${this.operation.getId()}`
      );
    }
  }

  private buildResponse() {
    const response = this.operation.getResponse();
    if (!response) throw new Error(`Empty response for operation: ${this.operation.getId()}`);
    return this.responseClass.deserializeBinary(response.getValue_asU8()) as InstanceType<ResponseClass>;
  }

  private async updateOperationStatus() {
    this.operation = await this.client.get({ operationId: this.operation.getId() });
  }

  private async sleep() {
    await sleep(this.delay);
    this.delay = Math.min(this.delay * 2, this.options.maxDelay);
  }
}
