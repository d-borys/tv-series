import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Series} from '../model/series';
import {AppState} from '../core/reducers/app.reducer';
import {selectMoviesForDate} from './store/series.selectors';
import {tap} from 'rxjs/operators';
import {changeCurrentFilterDate} from './store/series.actions';
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

  constructor(
    private store: Store<AppState>,
    private datePipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dateFilter = new Date();
    this.getFilteredSeries();
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
    this.series$ = this.store.select(selectMoviesForDate).pipe(tap(console.log));
  }

}
