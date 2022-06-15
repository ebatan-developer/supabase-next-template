import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Label} from './Label';
import {Property} from 'csstype';

const Root = styled.div<{width?: Property.Width}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({width}) => width};
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Required = styled.div`
  color: red;
  font-weight: 550;
  font-size: 8px;
`;

export const LabelContents = React.memo<{
  label: string;
  required?: boolean;
  children?: ReactNode;
  width?: Property.Width;
}>(({label, children, required, width}) => {
  return (
    <Root width={width}>
      <LabelWrapper>
        <Label>{label}</Label>
        {required && <Required>*必須</Required>}
      </LabelWrapper>
      {children}
    </Root>
  );
});
LabelContents.displayName = 'LabelContents';
