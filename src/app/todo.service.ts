import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

  private todos = new BehaviorSubject<any>(['Wakeup at 6AM','Clean the bike']);
  todo = this.todos.asObservable();
  constructor() { }

}
