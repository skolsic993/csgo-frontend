import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSegmentsComponent } from './map-segments.component';

describe('MapSegmentsComponent', () => {
  let component: MapSegmentsComponent;
  let fixture: ComponentFixture<MapSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSegmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
