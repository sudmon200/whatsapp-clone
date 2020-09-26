import React from 'react';

function ChatItem({ message }) {
  const name = message.name || '',
    chatMessage = message.message || '',
    timestamp = message.timestamp || '',
    messageReceived = message.received || false,
    receiverClass = messageReceived ? 'chat__receiver' : '';

  return (
    <p className={`chat__message ${receiverClass}`}>
      <span className='chat__name'>{name}</span>
      {chatMessage}
      <span className='chat__timestamp'>
        {timestamp ? timestamp : new Date().toUTCString()}
      </span>
    </p>
  );
}

export default ChatItem;
