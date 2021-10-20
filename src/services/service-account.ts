import { ServiceAccountServiceClient } from '../../generated/yandex/cloud/iam/v1/service_account_service_grpc_pb';
import { ServiceAccount } from '../../generated/yandex/cloud/iam/v1/service_account_pb';

import { GrpcPromisedClient } from '../helpers/grpc-promisify';
import { Session } from '../session';

export class ServiceAccountService {
  api: GrpcPromisedClient<ServiceAccountServiceClient>;
  saPromise?: Promise<ServiceAccount.AsObject>;

  constructor(session: Session, private serviceAccountId: string) {
    this.api = session.createClient(ServiceAccountServiceClient);
  }

  async get() {
    if (!this.saPromise) this.saPromise = this.requestServiceAccount();
    return this.saPromise;
  }

  private async requestServiceAccount() {
    const res = await this.api.get({ serviceAccountId: this.serviceAccountId });
    return res.toObject();
  }
}
