import {createFeatureSelector, createSelector} from '@ngrx/store';
import {seriesFeatureKey, SeriesState} from './series.reducer';

const seriesState = createFeatureSelector<SeriesState>(seriesFeatureKey);

export const selectAllSeries = createSelector(
  seriesState,
  (state) => state.series
);

export const selectCurrentShow = createSelector(
  seriesState,
  (state) => state.show
);

export const selectCurrentFilterDate = createSelector(
  seriesState,
  (state) => state.currentFilterDate
);

export const selectWasDateAlreadySearched = createSelector(
  seriesState,
  (state) => state.filteredDates.findIndex(item => item === state.currentFilterDate) > -1
);

export const selectSeriesForDate = createSelector(
  selectAllSeries,
  selectCurrentFilterDate,
  (series, currentFilterDate) => {
    return series.filter(show => show.airdate === currentFilterDate);
  }
);

export const selectGenreFilter = createSelector(
  seriesState,
  (state) => state.currentGenre
);

export const selectSeriesByFilter = createSelector(
  selectSeriesForDate,
  selectGenreFilter,
  (series, genre) => genre ? series.filter(item => item.show.genres.indexOf(genre) > -1) : series
);


export const selectSeriesGenres = createSelector(
  selectSeriesForDate,
  (series) => {
    const genres = series
      .map(item => item.show.genres)
      .reduce((a, b) => [...a, ...b], []);
    return [...new Set(genres)];
  }
);



