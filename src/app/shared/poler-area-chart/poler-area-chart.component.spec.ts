import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolerAreaChartComponent } from './poler-area-chart.component';

describe('PolerAreaChartComponent', () => {
  let component: PolerAreaChartComponent;
  let fixture: ComponentFixture<PolerAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolerAreaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolerAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
