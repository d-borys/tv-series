import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {SeriesService} from '../../../core/services/series.service';
import {Show} from '../../../model/show';
import {fetchShowSuccess} from '../../store/series.actions';
import {AppState} from '../../../core/reducers/app.reducer';


@Injectable()
export class ShowResolver implements Resolve<Show> {
  constructor(
    private store: Store<AppState>,
    private seriesService: SeriesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Show> {
    const id = +route.params.id;
    return this.seriesService.fetchShowById(id).pipe(
      tap(show => this.store.dispatch(fetchShowSuccess({show}))),
    );
  }
}
