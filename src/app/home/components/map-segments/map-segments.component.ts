import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatAll, first, map, switchMap } from 'rxjs/operators';
import { Segment } from './../../../models/Segment';

@Component({
  selector: 'app-map-segments',
  templateUrl: './map-segments.component.html',
  styleUrls: ['./map-segments.component.scss'],
})
export class MapSegmentsComponent implements OnInit {
  public currentSegment$!: Observable<Segment>;
  public maps$: Observable<{ label: string }[]> = of([]);
  public selectedMap$: Observable<Segment>;

  @Input() segments$: Observable<Segment[]>;

  constructor() {}

  ngOnInit() {
    this.maps$ = this.segments$.pipe(
      map((csgoMaps: Segment[]) =>
        csgoMaps.map((mapa) => {
          return {
            label: mapa?.label,
          };
        })
      )
    );

    this.selectedMap$ = this.segments$.pipe(concatAll(), first());
  }

  mapHandler(event: { label: string }) {
    if (event) {
      this.selectedMap$ = this.segments$.pipe(
        switchMap((maps: Segment[]) => {
          return maps.filter(
            (selectedMap: Segment) => event?.label === selectedMap?.label
          );
        })
      );
    }
  }
}
