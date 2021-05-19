import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {addNewFilterDate, changeCurrentFilterDate, fetchSeries, fetchSeriesFailed, fetchSeriesSuccess} from './series.actions';
import {catchError, concatMap, filter, map, switchMap, withLatestFrom} from 'rxjs/operators';

import {of} from 'rxjs';
import {SeriesService} from '../../core/services/series.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/reducers/app.reducer';
import {selectCurrentFilterDate, selectWasDateAlreadySearched} from './series.selectors';


@Injectable()
export class SeriesEffects {
  constructor(
    private actions$: Actions,
    private seriesService: SeriesService,
    private store: Store<AppState>
  ) {
  }

  changeCurrentFilterDate$ = createEffect(() => this.actions$.pipe(
    ofType(changeCurrentFilterDate),
    withLatestFrom(this.store.select(selectWasDateAlreadySearched)),
    filter(([action, wasAlreadySearched]) => !wasAlreadySearched),
    map(([{date}]) => fetchSeries({currentDate: date}))
  ));

  loadSeries$ = createEffect(() => this.actions$.pipe(
    ofType(fetchSeries),
    withLatestFrom(this.store.select(selectCurrentFilterDate)),
    switchMap(([action, currentDate]) => {
      return this.seriesService.fetchSeries(currentDate).pipe(
        concatMap((series) => {
          return [
            fetchSeriesSuccess({series}),
            addNewFilterDate({date: currentDate})
          ];
        }),
        catchError(error => {
          console.log(error);
          return of(fetchSeriesFailed({message: 'Something went wrong'}))
        })
      );
    })
  ));

  // loadShow$ = createEffect(() => this.actions$.pipe(
  //   ofType(fetchShow),
  //   switchMap(({id}) => {
  //     return this.seriesService.fetchShowById({id}).pipe(
  //       map((show) => fetchShowSuccess({show})),
  //       catchError(error => of(fetchShowFailed({message: 'Something went wrong'})))
  //     );
  //   })
  // ));
}
