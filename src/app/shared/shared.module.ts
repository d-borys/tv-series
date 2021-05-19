import {NgModule} from '@angular/core';
import {SafePipe} from './directives/safe.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  exports: [
    SafePipe,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ]
})

export class SharedModule {

}
