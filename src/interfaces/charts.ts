export interface ChartOptions {
  chart: Chart;
  title: Title;
  xaxis: Xaxis;
  series: Series[];
}

export interface Chart {
  height: number;
  type: string;
  animations: Animations;
}

export interface Animations {
  enabled: boolean;
  easing: string;
  speed: number;
  animateGradually: AnimateGradually;
  dynamicAnimation: DynamicAnimation;
}

export interface AnimateGradually {
  enabled: boolean;
  delay: number;
}

export interface DynamicAnimation {
  enabled: boolean;
  speed: number;
}

export interface Series {
  name: string;
  data: number[];
}

export interface Title {
  text: string;
}

export interface Xaxis {
  categories: string[];
}
