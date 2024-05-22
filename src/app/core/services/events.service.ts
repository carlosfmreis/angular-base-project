import { EventEmitter, Injectable } from '@angular/core';
import { AppEvent } from '../data/event.enum';

@Injectable()
export class EventsService {
  readonly events: EventEmitter<AppEvent> = new EventEmitter<AppEvent>();

  constructor() {}
}
