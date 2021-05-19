import {createAction, props} from '@ngrx/store';
import {Series} from '../../model/series';
import {Show} from '../../model/show';


export const fetchSeries = createAction(
  '[Series Effect] Fetch Series',
  props<{ currentDate: string }>()
);

export const fetchSeriesSuccess = createAction(
  '[Series Effect] Fetch Series Success',
  props<{ series: Series[] }>()
);

export const fetchSeriesFailed = createAction(
  '[Series Effect] Fetch Series Failed',
  props<{ message: string }>()
);

export const fetchShow = createAction(
  '[Series Details Resolver] Fetch Show',
  props<{ id: number }>()
);

export const fetchShowSuccess = createAction(
  '[Series Effect] Fetch Show Success',
  props<{ show: Show }>()
);

export const fetchShowFailed = createAction(
  '[Series Effect] Fetch Show Failed',
  props<{ message: string }>()
);

export const changeCurrentFilterDate = createAction(
  '[Series Component] Change Filter Date',
  props<{ date: string }>()
);

export const addNewFilterDate = createAction(
  '[Series Effect] Add New Filter Date',
  props<{ date: string }>()
);

export const changeGenreFilter = createAction(
  '[Series Component] Change Filter Genre',
  props<{genre: string}>()
);


