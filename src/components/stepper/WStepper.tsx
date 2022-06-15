import {Step, StepLabel, Stepper} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

type P = {
  steppers: string[];
  step: number;
};
const Root = styled.div`
  width: 100%;
  align-items: center;
`;
export const WStepper = React.memo<P>(({step, steppers}) => {
  return (
    <Root>
      <Stepper activeStep={step} alternativeLabel>
        {steppers.map((label, idx) => (
          <Step key={idx}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Root>
  );
});
WStepper.displayName = 'WStepper';
