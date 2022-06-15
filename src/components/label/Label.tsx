import React from 'react';
import styled from 'styled-components';

const LabelDiv = styled.div<{fontSize?: number}>`
  font-style: normal;
  font-weight: normal;
  font-size: ${({fontSize}) => (fontSize ? fontSize + 'px' : '11px')};
  line-height: 16px;
  color: #334d6e;
  white-space: pre-line;
`;
export const Label = React.memo<{children: string; id?: string; fontSize?: number}>(({children, id, fontSize}) => {
  return (
    <LabelDiv id={id} fontSize={fontSize}>
      {children}
    </LabelDiv>
  );
});
Label.displayName = 'Label';
