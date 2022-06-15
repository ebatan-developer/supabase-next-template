import React, {ReactNode, useCallback} from 'react';
import {styled as MuiStyled} from '@mui/material/styles';
import {TextField} from '@mui/material';
import styled from 'styled-components';
import {Label} from '../label/Label';

const BootstrapInput = MuiStyled(TextField)(({theme}) => ({
  '& .MuiInputBase-multiline': {
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    padding: '6px 26px 6px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontSize: 16,
    fontFamily: ['Poppins', 'sans-serif'],
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const InputWrapper = styled.div<{width?: string | number}>`
  display: flex;
  flex-direction: column;
  width: ${({width}) => width ?? '100%'};
  gap: 8px;
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Required = styled.div`
  color: red;
  font-weight: 550;
  font-size: 8px;
`;

type Props = {
  value?: string;
  showValue?: string;
  onChangeValue?: (value: string) => void;
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
  rows?: number;
  label?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  RightButton?: ReactNode;
  placeholder?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const MultiTextInput = React.memo<Props>(props => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChangeValue) {
        props.onChangeValue(e.target.value);
      }
    },
    [props]
  );
  return (
    <InputWrapper width={props.width}>
      {props.label && (
        <LabelWrapper>
          <Label>{props.label}</Label>
          {props.required && <Required>*必須</Required>}
        </LabelWrapper>
      )}
      <BootstrapInput
        onChange={onChange}
        value={props.value}
        style={{width: props.fullWidth ? '100%' : props.width, height: props.height}}
        rows={props.rows}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        multiline={true}
        InputProps={{
          endAdornment: props.RightButton,
        }}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </InputWrapper>
  );
});
