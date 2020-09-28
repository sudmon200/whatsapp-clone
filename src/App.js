import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/';
import Chat from './components/Chat/';
import Pusher from 'pusher-js';
import axios from './api/';
import './App.scss';

function App() {
  const [messages, setMessages] = useState();

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

  //console.log('rooms =>', rooms);
  // console.log('messages >', messages);

  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Switch>
            <Sidebar />
            <Route path='/room/:roomId'>
              <Chat messages={messages} />
            </Route>
            <Route path='/'>
              <Chat messages={messages} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
