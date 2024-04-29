import './App.css'
import data from './data/tutorial.json'
import Card from './components/Card/Card'
import { useState } from 'react'
import { TutorialData } from './types';

function App() {
  const [step, setStep] = useState(0);

  const currentCardData: TutorialData = data[step];

  console.log(data)

  return (
    <>
      <Card 
        title={currentCardData.title}
        description={currentCardData.description}
        bgColor={currentCardData.bgColor}
        image={currentCardData.image}  />
    </>
  )
}

export default App
