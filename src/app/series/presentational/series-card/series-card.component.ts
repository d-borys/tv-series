import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Series} from '../../../model/series';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesCardComponent implements OnInit {
  @Input() series: Series;
  @Output() detailsClicked = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  onDetails(): void {
    this.detailsClicked.emit(this.series.show.id);
  }

}
