import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Series} from '../model/series';
import {AppState} from '../core/reducers/app.reducer';
import {selectSeriesByFilter, selectSeriesGenres} from './store/series.selectors';
import {changeCurrentFilterDate, changeGenreFilter} from './store/series.actions';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesComponent implements OnInit {
  series$: Observable<Series[]>;
  dateFilter: Date;
  genres$: Observable<string[]>;

  constructor(
    private store: Store<AppState>,
    private datePipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dateFilter = new Date();
    this.getFilteredSeries();
    this.genres$ = this.store.select(selectSeriesGenres);
  }

  getFilteredSeries(): void {
    const formattedDate = this.datePipe.transform(this.dateFilter, 'yyyy-MM-dd');
    this.store.dispatch(changeCurrentFilterDate({date: formattedDate}));
    this.series$ = this.store.select(selectSeriesByFilter);
  }

  onDateChange(): void {
    this.getFilteredSeries();
  }

  onDetailsClicked(id: number): void {
    this.router.navigateByUrl(`details/${id}`);
  }

  onChipClick(genre: string): void {
    this.store.dispatch(changeGenreFilter({genre}));
  }

}
