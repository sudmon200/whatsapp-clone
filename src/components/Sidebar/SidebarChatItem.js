import React from 'react';
import { Avatar } from '@material-ui/core';

function SidebarChatItem() {
  return (
    <div className='sidebarChatItem'>
      <Avatar />
      <div className='sidebarChatItem__info'>
        <h2>chat one</h2>
        <p>Last Message will appear here</p>
      </div>
    </div>
  );
}

export default SidebarChatItem;
