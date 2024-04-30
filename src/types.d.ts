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
    onClickIndicator: (index: number) => void; 
  }

  export interface IndicatorsProps {
    step: number;
    totalSteps: number;
    onClickIndicator: (index: number) => void; // Ensure onClickIndicator prop is included
  }


 export interface IndicatorProps {
    active: boolean;
    onClick: () => void; // Ensure onClick prop is included
  }

