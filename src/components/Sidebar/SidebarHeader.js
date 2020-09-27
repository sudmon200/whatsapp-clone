import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SidebarHeader() {
  return (
    <div className='sidebar__header'>
      <Avatar src='https://lh3.googleusercontent.com/ogw/ADGmqu_M-RmzrQ1qdIFTyaRh9WFMFBXvWJ38p9YVdoQ=s83-c-mo' />
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
