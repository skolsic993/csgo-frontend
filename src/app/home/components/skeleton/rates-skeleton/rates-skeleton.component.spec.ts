import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesSkeletonComponent } from './rates-skeleton.component';

describe('RatesSkeletonComponent', () => {
  let component: RatesSkeletonComponent;
  let fixture: ComponentFixture<RatesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
