import {LoadingButton} from '@mui/lab';
import React from 'react';
import {Property} from 'csstype';

type P = {
  loading?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => any;
  disabled?: boolean;
  label: string;
  width?: Property.Width;
};
export const WButton = React.memo<P>(props => {
  return (
    <LoadingButton
      loading={props.loading}
      color={props.color}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
      sx={{width: props.width}}
    >
      {props.label}
    </LoadingButton>
  );
});
