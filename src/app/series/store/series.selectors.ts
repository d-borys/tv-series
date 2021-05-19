import {createFeatureSelector, createSelector} from '@ngrx/store';
import {seriesFeatureKey, SeriesState} from './series.reducer';

const seriesState = createFeatureSelector<SeriesState>(seriesFeatureKey);

export const selectAllSeries = createSelector(
  seriesState,
  (state) => state.series
);

export const selectSeriesShowById = (id) => createSelector(
  selectAllSeries,
  (series) => series.find(item => item.show.id === id)
);

export const selectCurrentFilterDate = createSelector(
  seriesState,
  (state) => state.currentFilterDate
);

export const selectWasDateAlreadySearched = createSelector(
  seriesState,
  (state) => state.filteredDates.findIndex(item => item === state.currentFilterDate) > -1
);

export const selectMoviesForDate = createSelector(
  selectAllSeries,
  selectCurrentFilterDate,
  (series, currentFilterDate) => series.filter(show => show.airdate === currentFilterDate)
);

