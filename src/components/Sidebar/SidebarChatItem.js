import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

function SidebarChatItem({ name, id }) {
  const avatar = Math.floor(Math.random() * Math.floor(100));
  return (
    <div className='sidebarChatItem'>
      <Link to={`/room/${id}`}>
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${avatar}.svg?mood[]=happy`}
        />
        <div className='sidebarChatItem__info'>
          <h2>{name}</h2>
          <p>Last Message will appear here</p>
        </div>
      </Link>
    </div>
  );
}

export default SidebarChatItem;
