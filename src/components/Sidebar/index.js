import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat';
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import axios from '../../api/';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';
import Pusher from 'pusher-js';
import './Sidebar.scss';

function Sidebar() {
  const [rooms, setRooms] = useState('');

  useEffect(() => {
    axios.get('/api/v1/rooms/sync').then((response) => {
      setRooms(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('3201d50d11aef91911c9', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('rooms');
    channel.bind('inserted', function (newRoom) {
      alert(JSON.stringify(newRoom));
      setRooms([...rooms, newRoom]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [rooms]);

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

      <SidebarChat rooms={rooms} />
    </div>
  );
}

export default Sidebar;
