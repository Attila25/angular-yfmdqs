import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';

import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import * as fromBooks from './store/teachers.reducer';
import { BookEffects } from './store/books.effects';
import { BooksCreateComponent } from './books-create/books-create.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersListComponent } from './teachers-list/teachers-list/teachers-list.component';
import { TeachersService } from './teachers.service';

@NgModule({
  imports: [
    CommonModule, TeachersRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.booksReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  declarations: [
    TeachersComponent, TeachersListComponent, BooksCreateComponent
  ],
  providers: [
    TeachersService
  ]
})
export class TeachersModule { }