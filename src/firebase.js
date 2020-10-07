import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZYhYKUkjxc28fuQjTl0c2Un-opPxSlLU',
  authDomain: 'whatsapp-clone-cf781.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-cf781.firebaseio.com',
  projectId: 'whatsapp-clone-cf781',
  storageBucket: 'whatsapp-clone-cf781.appspot.com',
  messagingSenderId: '432764424586',
  appId: '1:432764424586:web:aa9079460a3c5633f53873',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
