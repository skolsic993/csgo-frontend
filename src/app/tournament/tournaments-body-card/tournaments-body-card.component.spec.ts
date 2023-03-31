import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsBodyCardComponent } from './tournaments-body-card.component';

describe('TournamentsBodyCardComponent', () => {
  let component: TournamentsBodyCardComponent;
  let fixture: ComponentFixture<TournamentsBodyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsBodyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentsBodyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
