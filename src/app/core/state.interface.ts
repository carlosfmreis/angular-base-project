export interface State<T> {
  setState(data: T): void;
  getState(): T | undefined;
  clearState(): void;
}
