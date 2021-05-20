import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


import {MatChipsModule} from '@angular/material/chips';
import {ChipsComponent} from './components/chips/chips.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ChipsComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule,
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ChipsComponent
  ]
})

export class SharedModule {

}
