import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  createDb() {
    const tasks = [
      { id: 12, name: 'Do Dishes' },
      { id: 13, name: 'Walk Dog' },
      { id: 14, name: 'Cook Dinner' },
      { id: 15, name: 'Fix Door' },
      { id: 16, name: 'Get Milk' },
      { id: 17, name: 'Do Work' },
      { id: 18, name: 'Pay Taxes' },
      { id: 19, name: 'Work Out' },
      { id: 20, name: 'Learn To Code' }
    ];
    return { tasks };
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
