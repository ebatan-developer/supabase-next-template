import React from 'react';
import styled from 'styled-components';

const BorderDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebeff2;
`;
export const Border = React.memo(() => {
  return <BorderDiv />;
});
Border.displayName = 'Border';
