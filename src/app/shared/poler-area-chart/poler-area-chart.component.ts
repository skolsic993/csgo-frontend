import {
  Component,
  HostListener,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 700) {
      this.setDataWithoutLabels();
      this.getResults();
    } else {
      this.setData();
      this.getResults();
    }
  }

  private getResults(): void {
    this.results$ = combineLatest([this.data$, this.selectedMap$]).pipe(
      map(([data, selectedMap]: [data: ChartData, selectedMap: Segment]) => {
        return {
          ...data,
          ...(data.datasets[0].data = [
            selectedMap?.stats['Headshots per Match'],
            selectedMap?.stats['Win Rate %'],
            selectedMap?.stats['Average Kills'],
            selectedMap?.stats['Average Headshots %'],
            selectedMap?.stats['Average Assists'],
            selectedMap?.stats['Average MVPs'],
            selectedMap?.stats['Average Deaths'],
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
        'Headshots per Match %',
        'Win Rate %',
        'Average Kills %',
        'Average Headshots %',
        'Average Assists %',
        'Average MVPs %',
        'Average Deaths %',
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
          labels: {
            color: '#ccfc47',
          },
          position: 'right',
        },
      },
      scales: {
        r: {
          grid: {
            color: '#ccfc47',
          },
        },
      },
    };
  }

  private getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
          position: 'top',
        },
        datalabels: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(255,255,255,0.1)',
          },
          ticks: {
            display: false,
          },
        },
      },
    };
  }
}
