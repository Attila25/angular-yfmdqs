import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/effects';
import {
  TeacherActionTypes,
  teacherCreatedAction,
  teachersLoadedAction,
} from './teachers.actions';
import { TeachersService } from '../teachers/teachers.service';
import { selectNextTeacherId } from './teachers.selectors';
import { TeacherModel } from './teachers.model';

@Injectable()
export class TeacherEffects {
  loadTeachers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActionTypes.teachersRequested),
      mergeMap((action) => {
        return this.teachersService.getTeachers().pipe(
          map((teachers) => teachersLoadedAction({ teachers })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  createTeacher$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeacherActionTypes.teacherCreate),
      concatLatestFrom((action) => this.store.select(selectNextTeacherId)),
      switchMap(([action, id]) => {
        console.log(action, id);
        return this.teachersService.createTeacher(action).pipe(
          map((item: any) => {
            return teacherCreatedAction({
              teacher: {
                id,
                neptun: action.neptun,
                name: action.name,
                email: action.email,
                position: action.position,
                subjectId: action.subjectId,
                subjects: [],
                deleted: false,
              },
            });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private teachersService: TeachersService,
    private store: Store
  ) {}
}
