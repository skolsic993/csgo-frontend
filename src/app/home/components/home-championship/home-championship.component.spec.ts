import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChampionshipComponent } from './home-championship.component';

describe('HomeChampionshipComponent', () => {
  let component: HomeChampionshipComponent;
  let fixture: ComponentFixture<HomeChampionshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChampionshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
