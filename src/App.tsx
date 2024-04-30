import './App.css'
import data from './data/tutorial.json'
import Card from './components/Card/Card'
import { useState } from 'react'
import { TutorialData } from './types';
import styled, { keyframes, css } from 'styled-components';
 

const slideInRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const CardContainer = styled.div<{ direction: 'next' | 'prev' | null }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 16rem;
    border-radius: 1rem;
    box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4);
    -webkit-box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4);
    -moz-box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4));
    ${({ direction }) => direction === 'next' && css`
      animation: ${slideInRight} 0.5s both;
    `}
    ${({ direction }) => direction === 'prev' && css`
      animation: ${slideOutLeft} 0.5s both;
    `}
`;

function App() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<null | 'next' | 'prev'>(null); 

  const currentCardData: TutorialData = data[step];

  function nextStep() {
    if (step < data.length - 1) {
      setDirection('next');
      setTimeout(() => {
        setStep(step + 1);
        setDirection(null);
      }, 500);
    }
  }
  function prevStep() {
    if (step > 0) {
        setDirection('prev');
        setTimeout(() => {
          setStep(step - 1);
          setDirection(null);
        }, 500);
    }
  }

  function handleClickIndicator(index: number) {
    setStep(index);
  }

  return (
    <CardContainer direction={direction}>
          <Card 
      title={currentCardData.title}
      description={currentCardData.description}
      bgColor={currentCardData.bgColor}
      image={currentCardData.image}
      onClick={nextStep}
      onClickPrev={prevStep}
      step={step}
      totalSteps={data.length}
      onClickIndicator={handleClickIndicator} 
    />
    </CardContainer>
  )
}

export default App
