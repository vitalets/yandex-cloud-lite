/**
 * Read YC cli config.
 * See: https://github.com/yandex-cloud/serverless-plugin/blob/13c372c1b3d378ed9c9fb1439e63b1024aaa7b13/lib/provider/provider.js#L23
 */

import path from 'path';
import fs from 'fs';
import os from 'os';
import yaml from 'yaml';
import { appendMessageToError } from './utils';

interface CliConfigRawData {
  current: string;
  profiles: Record<string, CliConfigRawProfile>;
}

interface CliConfigRawProfile {
  token: string;
  'cloud-id': string;
  'folder-id': string;
  'compute-default-zone': string;
}

export interface CliConfigData {
  oauthToken: string;
  folderId: string;
}

export class CliConfig {
  filePath: string;
  dataPromise?: Promise<CliConfigData>;

  constructor(useCliConfig: boolean | string) {
    this.filePath = this.getFilePath(useCliConfig);
  }

  async getData() {
    if (!this.dataPromise) this.dataPromise = this.readCliConfig();
    return this.dataPromise;
  }

  private async readCliConfig() {
    try {
      const content = await fs.promises.readFile(this.filePath, 'utf8');
      const data = yaml.parse(content) as CliConfigRawData;
      const { token: oauthToken, 'folder-id': folderId } = data.profiles[data.current];
      return { oauthToken, folderId };
    } catch (e) {
      throw appendMessageToError(e, `file: ${this.filePath}`);
    }
  }

  private getFilePath(useCliConfig: boolean | string) {
    return typeof useCliConfig === 'string'
      ? useCliConfig
      : path.join(os.homedir(), '.config', 'yandex-cloud', 'config.yaml');
  }
}
