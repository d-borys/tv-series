import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {seriesFeatureKey, seriesReducer} from './store/series.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SeriesEffects} from './store/series.effects';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SeriesComponent} from './series.component';
import {SeriesCardComponent} from './series-card/series-card.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import {SeriesDetailsResolver} from './series-details/series-details.resolver';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(seriesFeatureKey, seriesReducer),
    EffectsModule.forFeature([SeriesEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    SharedModule,
    FormsModule,
  ],
  declarations: [
    SeriesComponent,
    SeriesCardComponent,
    SeriesDetailsComponent
  ],
  exports: [
    // SeriesComponent,
    // SeriesCardComponent
  ],
  providers: [
    SeriesDetailsResolver
  ]
})
export class SeriesModule {

}
