export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || 'Not found error.');
    this.name = 'NotFoundError';
  }
}
