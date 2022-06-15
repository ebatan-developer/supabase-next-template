import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const RootWrapper = React.memo<{children: ReactNode}>(({children}) => <Root>{children}</Root>);
