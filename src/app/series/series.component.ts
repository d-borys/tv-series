import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Series} from '../model/series';
import {AppState} from '../core/reducers/app.reducer';
import {selectSeriesByFilter, selectSeriesGenres} from './store/series.selectors';
import {tap} from 'rxjs/operators';
import {changeCurrentFilterDate, changeGenreFilter} from './store/series.actions';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series$: Observable<Series[]>;
  dateFilter: any;
  genres$: Observable<string[]>;
  chip: string;

  constructor(
    private store: Store<AppState>,
    private datePipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dateFilter = new Date();
    this.getFilteredSeries();
    this.genres$ = this.store.select(selectSeriesGenres).pipe(tap(console.log));
  }

  onDateChange(): void {
    this.getFilteredSeries();
  }

  onDetailsClicked(id: number): void {
    this.router.navigateByUrl(`details/${id}`);
  }

  getFilteredSeries(): void {
    const formattedDate = this.datePipe.transform(this.dateFilter, 'yyyy-MM-dd');
    this.store.dispatch(changeCurrentFilterDate({date: formattedDate}));
    this.series$ = this.store.select(selectSeriesByFilter).pipe(tap(console.log));
  }

  onChipClick(genre: string): void {
    this.chip = this.chip === genre ? null : genre;
    this.store.dispatch(changeGenreFilter({genre: this.chip}));
  }

}
