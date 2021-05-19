import {Action, createReducer, on} from '@ngrx/store';
import {addNewFilterDate, changeCurrentFilterDate, changeGenreFilter, fetchSeriesSuccess} from './series.actions';
import {Series} from '../../model/series';

export const seriesFeatureKey = 'tv-series';

export interface SeriesState {
  series: Series[];
  filteredDates: string[];
  currentFilterDate: string;
  currentGenre: string;
}

const initialAppState: SeriesState = {
  series: [],
  filteredDates: [],
  currentFilterDate: undefined,
  currentGenre: undefined
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
      currentFilterDate: date
    };
  }),
  on(addNewFilterDate, (state, {date}) => {
    return {
      ...state,
      filteredDates: [...state.filteredDates, date],
    }
  }),
  on(changeGenreFilter, (state, {genre}) => {
    return {
      ...state,
      currentGenre: genre
    };
  })
);

export function seriesReducer(state: SeriesState, action: Action): SeriesState {
  return reducer(state, action);
}
