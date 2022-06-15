import React, {useCallback} from 'react';
import {SingleCheckBox} from './SingleCheckBox';

type Props = {
  value: string;
  onChange: (value: string, checked: boolean) => any;
  items: {value: string; label: string; disabled?: boolean}[];
};
export const CheckBox = React.memo<Props>((props: Props) => {
  const onChange = useCallback(
    (value: string, checked: boolean) => {
      props.onChange(value, checked);
    },
    [props]
  );
  return (
    <div>
      {props.items.map(item => (
        <SingleCheckBox
          label={item.label}
          value={item.value}
          onChange={onChange}
          checked={item.value === props.value}
          key={item.value}
        />
      ))}
    </div>
  );
});
CheckBox.displayName = 'CheckBox';
