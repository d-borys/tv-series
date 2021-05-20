import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SeriesComponent} from './series/containers/series/series.component';
import {ShowDetailsComponent} from './series/presentational/show-details/show-details.component';
import {ShowResolver} from './series/containers/show/show.resolver';
import {ShowComponent} from './series/containers/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: ShowComponent,
    resolve: {
      series: ShowResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
