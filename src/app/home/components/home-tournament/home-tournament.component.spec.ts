import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTournamentComponent } from './home-tournament.component';

describe('HomeTournamentComponent', () => {
  let component: HomeTournamentComponent;
  let fixture: ComponentFixture<HomeTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
