import { ChartModel } from './ChartModel';

export interface ChartData {
  datasets: ChartModel[];
  options: {
    responsive: boolean;
  };
  labels?: string[];
}
