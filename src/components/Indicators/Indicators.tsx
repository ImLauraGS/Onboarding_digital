import { IndicatorsProps, IndicatorProps } from "../../types";
import styled from 'styled-components';

const Indicator = styled.div<IndicatorProps>`
    width: ${({ active }) => (active ? '20px' : '10px')};
    height: 10px;
    border-radius: ${({ active }) => (active ? '50px' : '10px')};
    margin: 0 5px;
    background-color: ${({ active }) => (active ? 'blue' : 'gray')};
`;

const Indicators: React.FC<IndicatorsProps> = ({ step, totalSteps, onClickIndicator }) => {
    const indicators = Array.from({ length: totalSteps }, (_, index) => (
        <Indicator
            key={index}
            active={step === index}
            onClick={() => onClickIndicator(index)} 
        />
    ));

    return <>{indicators}</>;
}

export default Indicators;