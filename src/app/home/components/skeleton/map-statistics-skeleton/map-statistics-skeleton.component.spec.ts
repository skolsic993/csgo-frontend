import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatisticsSkeletonComponent } from './map-statistics-skeleton.component';

describe('MapStatisticsSkeletonComponent', () => {
  let component: MapStatisticsSkeletonComponent;
  let fixture: ComponentFixture<MapStatisticsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStatisticsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapStatisticsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
