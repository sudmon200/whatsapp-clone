import React from 'react';
import SidebarChatItem from './SidebarChatItem';

function SidebarChat({ rooms }) {
  return (
    <div className='sidebar__chat'>
      {rooms &&
        rooms.map((room, i) => (
          <SidebarChatItem name={room.name} id={room.id} key={i} />
        ))}
    </div>
  );
}

export default SidebarChat;
