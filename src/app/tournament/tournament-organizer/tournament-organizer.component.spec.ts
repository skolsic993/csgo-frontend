import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentOrganizerComponent } from './tournament-organizer.component';

describe('TournamentOrganizerComponent', () => {
  let component: TournamentOrganizerComponent;
  let fixture: ComponentFixture<TournamentOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentOrganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
