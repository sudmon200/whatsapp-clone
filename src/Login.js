import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: 'SET_USER',
          user: result.user,
        })
      )
      .catch((error) => console.log(error.message));
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          width='100px'
          src='https://www.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png'
          alt=''
        />
      </div>
      <h2>Sign in with Google</h2>
      <Button onClick={signIn}>Sign In With Google</Button>
    </div>
  );
}

export default Login;
