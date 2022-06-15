import {FirestorePagingQuery} from '../../firestore/firestoreActionCommon';
import {CoreTypes} from 'core-types/lib/common/firestore/firestoreCommonType';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {WCardListTemplate} from './WCardListTemplate';
import {Logger} from '../../common/logger/logger';
import {useSnackbar} from '../../redux/snackbar/snackbarRedux';
import {EmptyImage} from '../image/EmptyImage';
import {ContentsWrapper} from '../wrappers/ContentsWrapper';
import {Label} from '../label/Label';
import ReactLoading from 'react-loading';

type P<T extends CoreTypes> = {
  firestorePaging: FirestorePagingQuery<T>;
  cardRender: (row: T) => Promise<ReactNode>;
  onRowClick?: (row: T) => any;
  needUpdate?: boolean;
  setNeedUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  gap: 8px;
`;
const logger = Logger.create('WCardList');
export const WCardList = React.memo<P<any>>(props => {
  const snackbar = useSnackbar();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [rows, setRows] = useState<any[]>([]);
  const onFirstRender = useCallback(async () => {
    const firstRows = await props.firestorePaging.firstQuery();
    setRows(firstRows);
  }, [props.firestorePaging]);
  useEffect(() => {
    onFirstRender().then(() => setInitialized(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialized) {
      if (props.needUpdate) {
        logger.log('Exec update function');
        setRows([]);
        onFirstRender()
          .catch(e => {
            logger.error(e);
            snackbar.error('データ読み込み時にエラーが発生しました。');
          })
          .finally(() => {
            if (props.setNeedUpdate) {
              props.setNeedUpdate(false);
            }
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, props.needUpdate]);

  return (
    <Root>
      {initialized && !props.needUpdate ? (
        rows.length ? (
          rows.map(row => (
            <WCardListTemplate
              key={row?.id as string}
              row={row}
              cardRender={props.cardRender}
              onRowClick={props.onRowClick}
            />
          ))
        ) : (
          <ContentsWrapper
            flexDirection={'column'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'32px'}
          >
            <EmptyImage />
            <Label fontSize={16}>データが見つかりませんでした。</Label>
          </ContentsWrapper>
        )
      ) : (
        <ContentsWrapper
          flexDirection={'column'}
          width={'100%'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'32px'}
        >
          <ReactLoading type={'spinningBubbles'} color='#334D6E' />
        </ContentsWrapper>
      )}
    </Root>
  );
});
WCardList.displayName = 'WCardList';
