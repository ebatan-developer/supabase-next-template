import React, {Dispatch, SetStateAction, useCallback, useState} from 'react';
import {styled as MuiStyled} from '@mui/material/styles';
import {TextField, Stack} from '@mui/material';
import styled from 'styled-components';
import {DesktopDatePicker, LocalizationProvider, DateTimePicker as MuiDateTimePicker} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import jaLocale from 'date-fns/locale/ja';
import {Label} from '../label/Label';

const BootstrapInput = MuiStyled(TextField)(({theme}) => ({
  '&. MuiOutlinedInput-input': {
    border: '1px solid #ced4da',
    padding: '0px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    minHeight: '23px',
    width: '100%',
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

const Root = styled.div<{fullWidth?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
`;
const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
type P = {
  label?: string;
  required?: boolean;
  date: Date | null;
  setDate: (value: Date | null) => any;
  fullWidth?: boolean;
  clearable?: boolean;
  min?: Date;
  max?: Date;
};
export const DateTimePicker = React.memo<P>(props => {
  return (
    <Root fullWidth={props.fullWidth}>
      {props.label && (
        <LabelWrapper>
          <Label>{props.label}</Label>
          {props.required && <Required>*必須</Required>}
        </LabelWrapper>
      )}
      <Stack>
        <LocalizationProvider dateAdapter={DateAdapter} locale={jaLocale}>
          <DateTimeWrapper>
            <MuiDateTimePicker
              onChange={props.setDate}
              value={props.date}
              renderInput={params => <BootstrapInput {...params} style={{width: props.fullWidth ? '100%' : 'auto'}} />}
              mask={'____年__月__日 __:__'}
              inputFormat={'yyyy年MM月dd日 HH:mm'}
              ampm={false}
              clearable={props.clearable}
              maxDate={props.max}
              minDate={props.min}
            />
          </DateTimeWrapper>
        </LocalizationProvider>
      </Stack>
    </Root>
  );
});
DateTimePicker.displayName = 'DateTimePicker';
