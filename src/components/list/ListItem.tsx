import React, {useMemo} from 'react';
import {ListItemButton, ListItemIcon, ListItem as MuiListItem} from '@mui/material';
import {SvgIconComponent} from '@mui/icons-material';
import styled from 'styled-components';

const NoSelectItemText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #334d6e;
`;

const ActiveSelectItemText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #334d6e;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
`;

const ActiveLine = styled.div`
  height: 24px;
  width: 2px;
  background-color: #334d6e;
`;

export const ListItem = React.memo<{Icon: SvgIconComponent; title: string; active?: boolean; onClick?: () => void}>(
  ({Icon, title, active, onClick}) => {
    const color = useMemo(() => (active ? '#334D6E' : '#C2CFE0'), [active]);
    return (
      <MuiListItem disablePadding>
        <ListItemButton
          style={{
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '18px',
            paddingRight: '8px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          onClick={onClick}
        >
          <IconText>
            <ListItemIcon>
              <Icon style={{color}} />
            </ListItemIcon>
            {active ? (
              <ActiveSelectItemText>{title}</ActiveSelectItemText>
            ) : (
              <NoSelectItemText>{title}</NoSelectItemText>
            )}
          </IconText>
          {active && <ActiveLine />}
        </ListItemButton>
      </MuiListItem>
    );
  }
);
ListItem.displayName = 'ListItem';
