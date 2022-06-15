import React, {FocusEventHandler, useCallback} from 'react';
import {FormControl, NativeSelect, Select as MuiSelect} from '@mui/material';
import {Label} from '../label/Label';
import {styled} from '@mui/material/styles';
import {Property} from 'csstype';

const BootstrapInput = styled(MuiSelect)(({theme}) => ({
  '& .MuiInputBase-input': {
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
type P = {
  value: string;
  fullWidth?: boolean;
  width?: Property.Width;
  disabled?: boolean;
  onChangeValue: (value: string) => any;
  items: {label: string; value: string}[];
  label?: string;
  onBlur?: FocusEventHandler<unknown>;
  onFocus?: FocusEventHandler<unknown>;
};
export const Select = React.memo<P>(props => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target?.value !== undefined) {
        props.onChangeValue(e.target?.value);
      }
    },
    [props]
  );
  return (
    <div>
      <FormControl
        fullWidth={props.fullWidth}
        style={{gap: '8px', width: props.width}}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      >
        {props.label && <Label id='select-label'>{props.label}</Label>}
        <NativeSelect
          onChange={onChange}
          id='select-label'
          input={<BootstrapInput />}
          variant={'standard'}
          disabled={props.disabled}
        >
          {props.items.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
});
Select.displayName = 'Select';
