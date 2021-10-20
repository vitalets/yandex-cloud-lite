export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function appendMessageToError(e: Error, message: string) {
  e.message = [ e.message, message ].join(' ');
  e.stack = `${e.name}: ${e.message}\n${(e.stack || '').split('\n').slice(1).join('\n')}`;
  return e;
}
