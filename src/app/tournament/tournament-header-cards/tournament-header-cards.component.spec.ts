import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentHeaderCardsComponent } from './tournament-header-cards.component';

describe('TournamentHeaderCardsComponent', () => {
  let component: TournamentHeaderCardsComponent;
  let fixture: ComponentFixture<TournamentHeaderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentHeaderCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentHeaderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
