import { CardProps } from "../../types"
import styled from 'styled-components';
import data from '../../data/tutorial.json';
import Indicators from "../Indicators/Indicators";

const Title = styled.h1`
  font-size: 1.2em;
  text-align: start;
  color: black;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 16rem;
    border-radius: 1rem;
    box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4);
    -webkit-box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4);
    -moz-box-shadow: 0px 7px 14px -5px rgba(176,176,176,0.4);
`;

const Image = styled.img`  
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 18rem;
    padding: 5rem 2rem;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 17rem;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem;
`;

const Description = styled.p` 
    font-size: 0.9em;
    text-align: start;
    color: black;
`;

const ButtonNext = styled.div`
    border: none;
    color: black;
    font-size: 1em;
    background-color: transparent;
    cursor: pointer;
`;

const ButtonPrev = styled.div`
    border: none;
    color: black;
    font-size: 1em;
    background-color: transparent;
    cursor: pointer;
`;

const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    width: 50%;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
`;

export default function Card({ totalSteps, step, title, description, bgColor, image, onClick, onClickPrev }: CardProps) {
  return (
        <CardContainer>
            <CardHeader
                style={{ backgroundColor: bgColor }}
                >
                <Image
                    
                    src={image}
                    alt={title}
                />
            </CardHeader>
        <CardBody>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <CardFooter>
                <Indicators step={step} totalSteps={totalSteps} />
                <ContainerButtons>
                    {step > 0 && (
                    <ButtonPrev onClick={onClickPrev}>
                        <img src="carbon_next-outline.svg" alt="arrow" style={{ transform: 'rotate(180deg)' }}/>
                    </ButtonPrev>
                    )}
                    {step < data.length - 1 && (
                    <ButtonNext onClick={onClick}>
                        <img src="carbon_next-outline.svg" alt="arrow"/>
                    </ButtonNext>
                    )}
                </ContainerButtons>
            </CardFooter>
        </CardBody>
    </CardContainer>  
  )
}
