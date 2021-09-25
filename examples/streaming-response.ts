/**
 * Example of using response stream.
 * Convert text to speech.
 * 
 * Usage:
 * npx ts-node examples/streaming-response.ts
 */
import fs from 'fs';
import { once } from 'events';
import 'dotenv/config';
import * as grpc from '@grpc/grpc-js';
import { Session } from '../src';
import { SynthesizerClient } from '../generated/yandex/cloud/ai/tts/v3/tts_service_grpc_pb';
import { UtteranceSynthesisRequest, UtteranceSynthesisResponse } from '../generated/yandex/cloud/ai/tts/v3/tts_pb';

const { YC_OAUTH_TOKEN = '', FOLDER_ID = '' } = process.env;

const text = 'Привет! Как дела?';
const outFile = 'examples/speech.ogg';

main();

async function main() {
  const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
  const client = session.createClient(SynthesizerClient);
  const req = new UtteranceSynthesisRequest();
  req.setText(text);
  const metadata = createFolderMetadata(FOLDER_ID);
  const fileStream = fs.createWriteStream(outFile);
  const responseStream = client.utteranceSynthesis(req, metadata);
  responseStream.on('data', (res: UtteranceSynthesisResponse) => {
    const chunk = res.getAudioChunk();
    if (chunk) fileStream.write(chunk.getData());
  });
  await once(responseStream, 'end');
  fileStream.end();
  await once(fileStream, 'close');
  console.log(`File saved: ${outFile}`);
}

function createFolderMetadata(folderId: string) {
  const metadata = new grpc.Metadata();
  metadata.set('x-folder-id', folderId);
  return metadata;
}
