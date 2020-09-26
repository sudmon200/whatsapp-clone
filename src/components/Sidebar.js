import React from 'react';
import SidebarChatItem from './SidebarChatItem';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
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

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar__chat'>
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
      </div>
    </div>
  );
}

export default Sidebar;
