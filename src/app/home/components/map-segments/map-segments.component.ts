import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Segment } from './../../../models/Segment';

@Component({
  selector: 'app-map-segments',
  templateUrl: './map-segments.component.html',
  styleUrls: ['./map-segments.component.scss'],
})
export class MapSegmentsComponent implements OnInit {
  public activeIndex: number = 0;
  public currentSegment$!: Observable<Segment>;

  @Input() segments$: Observable<Segment[]>;

  constructor() {}

  ngOnInit(): void {
    this.getMapDetails('de_overpass');
  }

  public getMapDetails(map: string): void {
    this.currentSegment$ = this.segments$.pipe(
      switchMap((segments: Segment[]) => {
        return segments.filter((segment: Segment) => {
          return segment?.label === map ? segment : null;
        });
      })
    );
  }

  public switchHeaders(e: any): void {
    const map = e?.originalEvent?.target?.innerText;

    this.segments$.pipe(
      tap((v) => console.log(v, 'AA')),
      switchMap((segments: Segment[]) => {
        return segments.filter((segment: Segment) => {
          return segment?.label === map ? segment : null;
        });
      })
    );
  }
}
