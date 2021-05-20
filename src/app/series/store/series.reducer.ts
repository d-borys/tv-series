import {Action, createReducer, on} from '@ngrx/store';
import {addNewFilterDate, changeCurrentFilterDate, changeGenreFilter, fetchSeriesSuccess, fetchShowSuccess} from './series.actions';
import {Series} from '../../model/series';
import {Show} from '../../model/show';

export const seriesFeatureKey = 'tv-series';

export interface SeriesState {
  series: Series[];
  filteredDates: string[];
  currentFilterDate: string;
  currentGenre: string;
  show: Show;
}

const initialAppState: SeriesState = {
  series: [],
  filteredDates: [],
  currentFilterDate: undefined,
  currentGenre: undefined,
  show: undefined
};

const reducer = createReducer(initialAppState,
  on(fetchSeriesSuccess, (state, action) => {
    return {
     ...state,
     series: [...state.series, ...action.series]
    };
  }),
  on(changeCurrentFilterDate, (state, {date}) => {
    return {
      ...state,
      currentFilterDate: date,
      currentGenre: null
    };
  }),
  on(addNewFilterDate, (state, {date}) => {
    return {
      ...state,
      filteredDates: [...state.filteredDates, date],
    };
  }),
  on(changeGenreFilter, (state, {genre}) => {
    return {
      ...state,
      currentGenre: genre
    };
  }),
  on(fetchShowSuccess, (state, {show}) => {
    return {
      ...state,
      show
    };
  })
);

export function seriesReducer(state: SeriesState, action: Action): SeriesState {
  return reducer(state, action);
}
