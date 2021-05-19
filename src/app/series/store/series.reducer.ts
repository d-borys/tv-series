import {Action, createReducer, on} from '@ngrx/store';
import {addNewFilterDate, changeCurrentFilterDate, fetchSeriesSuccess, fetchShowSuccess} from './series.actions';
import {Series} from '../../model/series';

export const seriesFeatureKey = 'tv-series';

export interface SeriesState {
  series: Series[];
  filteredDates: string[];
  currentFilterDate: string;
}

const initialAppState: SeriesState = {
  series: [],
  filteredDates: [],
  currentFilterDate: undefined
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
  })
);

export function seriesReducer(state: SeriesState, action: Action): SeriesState {
  return reducer(state, action);
}
