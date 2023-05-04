import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/data/teachers.data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeachersService } from '../teachers.service';
import { selectTeachers } from '../../store/teachers.selectors';
import { teachersRequestedAction } from '../../store/teachers.actions';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
})
export class TeachersListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'neptun',
    'name',
    'email',
    'position',
    'subjectId',
    'subjects',
    'deleted',
  ];

  teachers$: Observable<Teacher[]> = this.store.pipe(select(selectTeachers));

  constructor(private teachersService: TeachersService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(teachersRequestedAction());
  }
}
