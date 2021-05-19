import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './reducers/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SeriesService} from './services/series.service';
import {DatePipe} from '@angular/common';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    SeriesService,
    DatePipe
  ]
})

export class CoreModule {

}
