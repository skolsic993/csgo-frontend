import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipSkeletonComponent } from './championship-skeleton.component';

describe('ChampionshipSkeletonComponent', () => {
  let component: ChampionshipSkeletonComponent;
  let fixture: ComponentFixture<ChampionshipSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
