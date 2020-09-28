import React from 'react';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatItem from './ChatItem';
import './Chat.scss';
import { useParams } from 'react-router-dom';

function Chat({ messages }) {
  const { roomId } = useParams();
  console.log('roomId =>', roomId);
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__body'>
        {messages &&
          messages.map((message, i) => <ChatItem message={message} key={i} />)}
      </div>
      <ChatFooter />
    </div>
  );
}

export default Chat;
