import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {seriesFeatureKey, seriesReducer} from './store/series.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SeriesEffects} from './store/series.effects';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {SeriesCardComponent} from './presentational/series-card/series-card.component';
import { ShowComponent } from './containers/show/show.component';
import {SeriesComponent} from './containers/series/series.component';
import {ShowDetailsComponent} from './presentational/show-details/show-details.component';
import {ShowResolver} from './containers/show/show.resolver';

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
    ShowDetailsComponent,
    ShowComponent
  ],
  exports: [],
  providers: [
    ShowResolver
  ]
})
export class SeriesModule {

}
