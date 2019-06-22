import { Injectable } from '@angular/core';
import { Event } from '../../model/event';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor() { }

  public async send(entity: Event) {
    // 1. add temp user via micro-service
    // 2. send using credentials
    // 3. destroy credentials
  }

  create(event: Event) {
    return 'u-u-i-d';
  }
}
