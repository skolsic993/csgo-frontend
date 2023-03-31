import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsBodyComponent } from './tournaments-body.component';

describe('TournamentsBodyComponent', () => {
  let component: TournamentsBodyComponent;
  let fixture: ComponentFixture<TournamentsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
