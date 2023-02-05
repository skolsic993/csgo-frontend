import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMatchesComponent } from './home-matches.component';

describe('HomeMatchesComponent', () => {
  let component: HomeMatchesComponent;
  let fixture: ComponentFixture<HomeMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
