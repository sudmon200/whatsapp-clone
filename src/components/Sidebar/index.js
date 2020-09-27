import React from 'react';
import SidebarChatItem from './SidebarChatItem';
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import axios from '../../api/';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';
import './Sidebar.scss';

function Sidebar({ rooms }) {
  const addRoom = async () => {
    const roomName = prompt('Please enter a room name', '');
    if (roomName) {
      await axios.post('/api/v1/rooms/new', {
        id: 'room-' + (rooms.length + 1),
        name: roomName,
      });
    }
  };
  return (
    <div className='sidebar'>
      <SidebarHeader />
      <SidebarSearch />
      <div className='sidebar__addChat' onClick={addRoom}>
        <IconButton>
          <AddBoxIcon />
        </IconButton>
        <h2>Add a new chat room</h2>
      </div>
      <div className='sidebar__chat'>
        {rooms &&
          rooms.map((room, i) => <SidebarChatItem room={room} key={i} />)}
      </div>
    </div>
  );
}

export default Sidebar;
