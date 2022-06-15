import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import {Logger} from '../../common/logger/logger';
import ReactLoading from 'react-loading';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ced4da;
  :hover {
    background-color: #ced4da;
  }
`;
type P = {
  row: any;
  cardRender: (row: any) => Promise<ReactNode>;
  onRowClick?: (row: any) => any;
};
const logger = Logger.create('WCardListTemplate');
export const WCardListTemplate = React.memo<P>(({row, cardRender, onRowClick}) => {
  const [contents, setContents] = useState<ReactNode>(
    <div>
      <ReactLoading type={'spinningBubbles'} color='#334D6E' />
    </div>
  );
  const init = useCallback(async () => {
    try {
      const contents = await cardRender(row);
      setContents(contents);
    } catch (e) {
      logger.error('Render Error', e);
    }
  }, [cardRender, row]);
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onRowClickRoot = useCallback(() => {
    if (onRowClick) {
      onRowClick(row);
    }
  }, [onRowClick, row]);
  return <Root onClick={onRowClickRoot}>{contents}</Root>;
});
