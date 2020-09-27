import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function SidebarSearch() {
  return (
    <div className='sidebar__search'>
      <div className='sidebar__searchContainer'>
        <SearchOutlinedIcon />
        <input type='text' placeholder='Search or start new chat' />
      </div>
    </div>
  );
}

export default SidebarSearch;
