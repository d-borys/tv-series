import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Show} from '../../model/show';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/reducers/app.reducer';
import {Router} from '@angular/router';
import {selectCurrentShow} from '../store/series.selectors';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesDetailsComponent implements OnInit {
  show$: Observable<Show>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.show$ = this.store.select(selectCurrentShow);
  }

  onReturn(): void {
    this.router.navigate(['']);
  }

}
