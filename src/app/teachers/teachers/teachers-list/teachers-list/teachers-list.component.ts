import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/data/teachers.data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
})
export class TeachersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'neptun', 'name', 'email', 'position'];

  teachers$: Observable<Teacher[]> = this.store.pipe(select(selectTeachers));

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(booksRequestedAction());
  }
}
