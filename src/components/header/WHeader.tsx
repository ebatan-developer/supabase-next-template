import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {WButton} from '../button/WButton';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 16px;
  color: #334d6e;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
type Buttons = {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => any;
  disabled?: boolean;
  label: string;
}[];
export const WHeader = React.memo<{title: string; buttons?: Buttons}>(props => {
  return (
    <Root>
      <Title>{props.title}</Title>
      <ButtonsWrapper>
        {props.buttons?.map(button => (
          <WButton
            key={button.label}
            label={button.label}
            color={button.color}
            variant={button.variant}
            onClick={button.onClick}
            disabled={button.disabled}
          />
        ))}
      </ButtonsWrapper>
    </Root>
  );
});

WHeader.displayName = 'WHeader';
