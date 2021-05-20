import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Show} from '../../../model/show';

@Component({
  selector: 'app-series-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsComponent implements OnInit {
  @Input() show: Show;

  constructor() {
  }

  ngOnInit(): void {
  }

}
