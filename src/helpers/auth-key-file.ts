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
  dataPromise?: Promise<AuthKeyData>;

  constructor(public authKeyFile: string) { }

  async getData() {
    if (!this.dataPromise) this.dataPromise = this.readAuthKeyFile();
    return this.dataPromise;
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
