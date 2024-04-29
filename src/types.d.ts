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
  }

