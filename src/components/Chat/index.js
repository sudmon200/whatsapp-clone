import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatItem from './ChatItem';
import './Chat.scss';
import { useParams } from 'react-router-dom';
import Pusher from 'pusher-js';
import axios from '../../api';

function Chat() {
  const [messages, setMessages] = useState();
  const [roomName, setRoomName] = useState();
  const { roomId } = useParams();
  console.log('roomId ==>', roomId);
  useEffect(() => {
    console.log('roomId <<<<<==>', roomId);
    if (roomId) {
      axios.get('/api/v1/rooms/sync').then((response) => {
        console.log('==>', response.data);
        response.data.map((room) => {
          if (room.id === roomId) {
            console.log('room Id ==>', room.id);
            setRoomName(room.name);
          }
        });
      });
    }
  }, [roomName]);

  useEffect(() => {
    axios.get('/api/v1/messages/sync').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('3201d50d11aef91911c9', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessages) {
      //alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className='chat'>
      <ChatHeader roomName={roomName} />
      <div className='chat__body'>
        {messages &&
          messages.map((message, i) => <ChatItem message={message} key={i} />)}
      </div>
      <ChatFooter />
    </div>
  );
}

export default Chat;
