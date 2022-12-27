import { ChartData } from './ChartData';

export interface ChartConfig {
  type: string;
  data?: ChartData;
  options: {
    maintainAspectRatio: boolean;
  };
}
