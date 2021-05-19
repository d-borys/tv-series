import {RouterModule, Routes} from '@angular/router';
import {SeriesComponent} from './series/series.component';
import {NgModule} from '@angular/core';
import {SeriesDetailsComponent} from './series/series-details/series-details.component';
import {SeriesDetailsResolver} from './series/series-details/series-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: SeriesDetailsComponent,
    resolve: {
      series: SeriesDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
