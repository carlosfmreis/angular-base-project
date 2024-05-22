export class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message || 'Forbidden error.');
    this.name = 'ForbiddenError';
  }
}
