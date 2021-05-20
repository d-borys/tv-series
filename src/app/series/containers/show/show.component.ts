import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/reducers/app.reducer';
import {selectCurrentShow} from '../../store/series.selectors';
import {Observable} from 'rxjs';
import {Show} from '../../../model/show';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show',
  template: `
    <div class="show">
      <app-series-details [show]="show$ | async"></app-series-details>
      <div class="button__bar">
        <button type="button" mat-raised-button color="primary" (click)="onReturn()">Return</button>
      </div>
    </div>
  `,
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
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
