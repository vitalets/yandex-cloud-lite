/**
 * Authorized key file reader.
 */
import fs from 'fs';
import { appendMessageToError } from './utils';

export interface AuthKeyData {
  id: string;
  service_account_id: string;
  public_key: string;
  private_key: string;
}

export class AuthKeyFile {
  authKeyDataPromise?: Promise<AuthKeyData>;

  constructor(public authKeyFile: string) { }

  async getData() {
    if (!this.authKeyDataPromise) this.authKeyDataPromise = this.readAuthKeyFile();
    return this.authKeyDataPromise;
  }

  private async readAuthKeyFile() {
    const content = await fs.promises.readFile(this.authKeyFile, 'utf8');
    try {
      return JSON.parse(content);
    } catch (e) {
      throw appendMessageToError(e, `file: ${this.authKeyFile}`);
    }
  }
}
