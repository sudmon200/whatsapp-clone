import React from 'react';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatItem from './ChatItem';
import './Chat.scss';

function Chat({ messages }) {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__body'>
        {messages?.map((message, i) => (
          <ChatItem message={message} key={i} />
        ))}
      </div>
      <ChatFooter />
    </div>
  );
}

export default Chat;
