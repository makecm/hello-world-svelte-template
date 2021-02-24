export interface TemplateProps {
  headline?: string;
  showLogos?: boolean;
  backgroundImage?: string;
}

export interface RandomCircleProps {
  r: number;
  cx: number;
  cy: number;
  'stroke-width': number;
  'stroke-dasharray': string;
}

declare global {
  interface Window {
    templateProps: object;
  }
}
