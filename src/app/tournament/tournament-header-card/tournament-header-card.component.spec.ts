import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentHeaderCardComponent } from './tournament-header-card.component';

describe('TournamentHeaderCardComponent', () => {
  let component: TournamentHeaderCardComponent;
  let fixture: ComponentFixture<TournamentHeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentHeaderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
