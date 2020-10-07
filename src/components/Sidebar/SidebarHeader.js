import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from '../../StateProvider';

function SidebarHeader() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar__header'>
      <Avatar src={user?.photoURL} />
      <div className='sidebar__headerRight'>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SidebarHeader;
