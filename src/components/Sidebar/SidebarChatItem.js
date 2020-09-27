import React from 'react';
import { Avatar } from '@material-ui/core';

function SidebarChatItem({ room }) {
  const avatar = Math.floor(Math.random() * Math.floor(100));
  return (
    <div className='sidebarChatItem'>
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${avatar}.svg?mood[]=happy`}
      />
      <div className='sidebarChatItem__info'>
        <h2>{room.name}</h2>
        <p>Last Message will appear here</p>
      </div>
    </div>
  );
}

export default SidebarChatItem;
