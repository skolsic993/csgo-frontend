import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartConfig } from 'src/app/models/ChartConfig';
import { ChartData } from 'src/app/models/ChartData';
import { Segment } from './../../models/Segment';

@Component({
  selector: 'app-poler-area-chart',
  templateUrl: './poler-area-chart.component.html',
  styleUrls: ['./poler-area-chart.component.scss'],
})
export class PolerAreaChartComponent implements OnInit {
  public data$: Observable<ChartData>;
  public config: ChartConfig;
  public results$: Observable<ChartData>;
  public chartOptions: any;

  @Input() selectedMap$: Observable<Segment>;

  constructor() {}

  ngOnInit(): void {
    this.config = {
      type: 'polarArea',
      options: {
        maintainAspectRatio: true,
      },
    };

    this.setData();
    this.getResults();
    this.updateChartOptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setData();
    this.getResults();
  }

  private getResults(): void {
    this.results$ = combineLatest([this.data$, this.selectedMap$]).pipe(
      map(([data, selectedMap]: [data: ChartData, selectedMap: Segment]) => {
        return {
          ...data,
          ...(data.datasets[0].data = [
            selectedMap?.stats['Average Kills'],
            selectedMap?.stats['Average Assists'],
            selectedMap?.stats['Average Deaths'],
            selectedMap?.stats['Headshots per Match'],
            selectedMap?.stats['Average MVPs'],
          ]),
        };
      })
    );
  }

  private setData(): void {
    this.data$ = of({
      datasets: [
        {
          data: [],
          backgroundColor: this.getColorShuffle(),
          label: ' Average',
        },
      ],
      options: {
        responsive: true,
      },
      labels: [
        'Average Kills',
        'Average Assists',
        'Average Deaths',
        'Headshots per Match',
        'Average MVPs',
      ],
    });
  }

  private setDataWithoutLabels(): void {
    this.data$ = of({
      datasets: [
        {
          data: [],
          backgroundColor: this.getColorShuffle(),
          label: ' Average',
        },
      ],
      options: {
        responsive: true,
      },
      labels: [],
    });
  }

  private getColorShuffle(): string[] {
    return [
      '#42A5F5',
      '#66BB6A',
      '#FFA726',
      '#26C6DA',
      '#7E57C2',
      '#f23081',
      '#e8f230',
      '#af45ed',
      '#b04545',
      '#4d8afa',
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
  }

  private updateChartOptions() {
    this.chartOptions =
      this.config && this.config ? this.getDarkTheme() : this.getLightTheme();
  }

  private getLightTheme() {
    return {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(0, 0, 0, 0.09)',
          },
          ticks: {
            display: false,
          },
        },
      },
    };
  }

  private getDarkTheme() {
    return {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(0, 0, 0, 0.09)',
          },
          ticks: {
            display: false,
          },
        },
      },
    };
  }
}
