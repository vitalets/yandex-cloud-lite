export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function appendMessageToError(e: Error, message: string) {
  if (!/^\s/.test(message)) message = ` ${message}`;
  const newMessage = `${e.message}${message}`;
  e.stack = `${e.name}: ${newMessage}\n${(e.stack || '').split('\n').slice(1).join('\n')}`;
  // important to assign e.message AFTER e.stack (to avoid duplication in stack)
  e.message = newMessage;
  return e;
}
