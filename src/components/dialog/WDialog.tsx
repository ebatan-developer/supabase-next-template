import React, {ReactNode} from 'react';
import {Dialog, Divider, IconButton} from '@mui/material';
import styled from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';
import {Close} from '@mui/icons-material';
type P = {
  open: boolean;
  onClose: () => any;
  title?: string;
  running?: boolean;
  onClickSuccessButton?: () => any;
  successButtonLabel?: string;
  successButtonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  width?: string;
  minWidth?: string;
  minHeight?: string;
  children: ReactNode;
};
const Root = styled.div<{width?: string; minHeight?: string; minWidth?: string}>`
  background-color: white;
  border-radius: 8px;
  min-height: ${({minHeight}) => minHeight ?? '0'}px;
  padding: 16px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #334d6e;
  white-space: pre-line;
`;
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const ActionsLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const ActionsRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const WDialog = React.memo<P>(props => {
  return (
    <Dialog open={props.open} fullWidth>
      <Root minWidth={props.minWidth} minHeight={props.minHeight} width={props.width}>
        {!!props.title && (
          <>
            <TitleWrapper>
              <Title>{props.title}</Title>
              {!props.onClickSuccessButton && (
                <IconButton onClick={props.onClose}>
                  <Close />
                </IconButton>
              )}
            </TitleWrapper>
            <Divider sx={{marginTop: '8px', marginBottom: '8px'}} />
          </>
        )}
        <Contents>{props.children}</Contents>
        {!!props.onClickSuccessButton && (
          <>
            <Divider sx={{marginTop: '8px', marginBottom: '8px'}} />
            <ActionsWrapper>
              <ActionsLeftWrapper>
                <LoadingButton
                  loading={props.running}
                  color={'secondary'}
                  variant={'contained'}
                  onClick={props.onClose}
                >
                  閉じる
                </LoadingButton>
              </ActionsLeftWrapper>
              <ActionsRightWrapper>
                <LoadingButton
                  loading={props.running}
                  color={props.successButtonColor ?? 'primary'}
                  variant={'contained'}
                  onClick={props.onClickSuccessButton}
                >
                  {props.successButtonLabel ?? '完了'}
                </LoadingButton>
              </ActionsRightWrapper>
            </ActionsWrapper>
          </>
        )}
      </Root>
    </Dialog>
  );
});
WDialog.displayName = 'WDialog';
