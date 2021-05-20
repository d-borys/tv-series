import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chips',
  template: `
    <mat-chip-list aria-label="Genres" [selectable]="selectable">
      <mat-chip *ngFor="let genre of genres" color="accent" [selected]="chip === genre" class="chip" [value]="genre"
                (click)="onChipClick(genre)">{{genre}}</mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent implements OnChanges {
  chip: string;
  @Output() chipClicked = new EventEmitter();
  @Input() genres: string[];
  @Input() selectable = true;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.genres) {
      this.chip = '';
    }
  }

  onChipClick(genre: string): void {
    if (this.selectable) {
      this.chip = this.chip === genre ? null : genre;
      this.chipClicked.emit(this.chip);
    }
  }

}
