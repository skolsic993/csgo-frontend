import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDetailsSegmentComponent } from './tournament-details-segment.component';

describe('TournamentDetailsSegmentComponent', () => {
  let component: TournamentDetailsSegmentComponent;
  let fixture: ComponentFixture<TournamentDetailsSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDetailsSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentDetailsSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
