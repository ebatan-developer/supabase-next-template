import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  height: 100vh;
`;

export const LoadingScreen = React.memo(() => {
  return (
    <Root>
      <ReactLoading type={'spinningBubbles'} color='#334D6E' />
      <img alt={'icon-logo'} src={'/img/icon-logo.png'} width={324} height={50} style={{objectFit: 'contain'}} />
    </Root>
  );
});
LoadingScreen.displayName = 'LoadingScreen';
