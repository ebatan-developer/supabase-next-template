import React, {useCallback} from 'react';
import {List} from '@mui/material';
import {ListItem} from './ListItem';
import {SvgIconComponent} from '@mui/icons-material';
import {useLocation, useNavigate} from 'react-router-dom';

export type ListTemplate = {
  icon: SvgIconComponent;
  title: string;
  onClick?: () => any;
  active?: boolean;
  path?: string;
};
export const ListTemplate = React.memo<{items: ListTemplate[]; onClickAfter?: () => any}>(({items, onClickAfter}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const onClickItem = useCallback(
    (item: ListTemplate) => {
      if (item.path && item.path !== pathname) {
        navigate(item.path);
      }
      if (item.onClick) {
        item.onClick();
      }
      if (onClickAfter) {
        onClickAfter();
      }
    },
    [pathname, onClickAfter, navigate]
  );
  return (
    <List>
      {items.map(item => (
        <ListItem
          key={item.title + item.path}
          Icon={item.icon}
          title={item.title}
          active={item.active || item.path === pathname}
          onClick={() => onClickItem(item)}
        />
      ))}
    </List>
  );
});
ListTemplate.displayName = 'ListTemplate';
