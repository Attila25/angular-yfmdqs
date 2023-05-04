import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TeacherTable } from './data/teachers.data';

@Injectable()
export class InMemoryEventService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const db = {
      teachers: TeacherTable._teachers,
    };
    return db;
  }
}
