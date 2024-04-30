export interface TutorialData {
    title: string;
    description: string;
    bgColor: string;
    image: string;
  }

export interface CardProps {
    title: string;
    description: string;
    bgColor: string;
    image: string;
    onClick: () => void;
    onClickPrev: () => void;
    step: number;
    totalSteps: number;
  }

export interface IndicatorProps {
    step: number;
    totalSteps: number;
    active?: boolean;
  }

