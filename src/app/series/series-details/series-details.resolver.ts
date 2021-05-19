import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Series} from '../../model/series';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../core/reducers/app.reducer';
import {selectSeriesShowById} from '../store/series.selectors';
import {Injectable} from '@angular/core';
import {switchMap, take, tap} from 'rxjs/operators';
import {SeriesService} from '../../core/services/series.service';
import {Show} from '../../model/show';
import {fetchSeries, fetchShow} from '../store/series.actions';


@Injectable()
export class SeriesDetailsResolver implements Resolve<Show> {
  constructor(
    private store: Store<AppState>,
    private seriesService: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Show> | Promise<Show> | Show {
    const id = +route.params.id;
    return this.store.pipe(
      select(selectSeriesShowById(id)),
      tap(series => {
        console.log(series);
        if (!series) {
          return this.store.dispatch(fetchShow({id}));
        }
        return of(series);
      }),
      take(1)
    );
  }

}
