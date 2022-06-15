import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Property} from 'csstype';

const Root = styled.div<{
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  marginTop?: Property.MarginTop;
  marginBottom?: Property.MarginBottom;
  marginLeft?: Property.MarginLeft;
  marginRight?: Property.MarginRight;
}>`
  margin-bottom: ${({marginBottom}) => marginBottom ?? '0px'};
  margin-top: ${({marginTop}) => marginTop ?? '0px'};
  margin-left: ${({marginLeft}) => marginLeft ?? '0px'};
  margin-right: ${({marginRight}) => marginRight ?? '0px'};
  max-width: ${({maxWidth}) => maxWidth ?? '100%'};
  min-width: ${({minWidth}) => minWidth ?? '0px'};
  width: ${({width}) => width ?? '100%'};
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);
`;

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #334d6e;
  margin-bottom: 16px;
`;
type P = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  title?: string;
  marginTop?: Property.MarginTop;
  marginBottom?: Property.MarginBottom;
  marginLeft?: Property.MarginLeft;
  marginRight?: Property.MarginRight;
  children?: ReactNode;
};
const WCard = React.memo<P>(
  ({children, width, maxWidth, minWidth, title, marginBottom, marginTop, marginLeft, marginRight}) => (
    <Root
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {title && <Title>{title}</Title>}
      {children}
    </Root>
  )
);
WCard.displayName = 'WCard';
export default WCard;
