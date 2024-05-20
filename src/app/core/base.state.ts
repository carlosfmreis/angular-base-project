import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state.interface';

export abstract class BaseState<T> implements State<T> {
  private _data?: T;
  private _subject: BehaviorSubject<T | undefined>;

  data$: Observable<T | undefined>;

  constructor() {
    this._subject = new BehaviorSubject<T | undefined>(undefined);
    this.data$ = this._subject.asObservable();
  }

  private _propagateChanges(): void {
    this._subject.next(this._data);
  }

  setState(data: T): void {
    this._data = data;
    this._propagateChanges();
  }

  getState(): T | undefined {
    return this._data;
  }

  clearState(): void {
    this._data = undefined;
    this._propagateChanges();
  }
}
