import React, {ReactNode} from 'react';
import styled from 'styled-components';
import {Property} from 'csstype';

const Root = styled.div`
  display: flex;
  width: 100%;
`;
const Contents = styled.div<{
  flexDirection?: 'column' | 'row';
  justifyContent?: Property.JustifyContent;
  width?: Property.Width;
  alignItems?: Property.AlignItems;
  gap?: Property.Gap;
  padding?: Property.Padding;
}>`
  width: ${({width}) => width};
  display: flex;
  padding: ${({padding}) => padding ?? '16px'};
  align-items: ${({alignItems}) => alignItems ?? 'start'};
  justify-content: ${({justifyContent}) => justifyContent ?? 'start'};
  flex-direction: ${({flexDirection}) => flexDirection ?? 'column'};
  gap: ${({gap}) => gap};
`;
export const ContentsWrapper = React.memo<{
  children: ReactNode;
  flexDirection?: 'column' | 'row';
  padding?: Property.Padding;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  width?: Property.Width;
  gap?: Property.Gap;
}>(({children, flexDirection, justifyContent, width, alignItems, gap, padding}) => (
  <Root>
    <Contents
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      gap={gap}
      padding={padding}
    >
      {children}
    </Contents>
  </Root>
));
ContentsWrapper.displayName = 'ContentsWrapper';
