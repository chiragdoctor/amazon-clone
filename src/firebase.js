import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCklJJ7pge3CULGDGQbOaAp2KZ7kaLMdz0',
  authDomain: 'clone-144eb.firebaseapp.com',
  databaseURL: 'https://clone-144eb.firebaseio.com',
  projectId: 'clone-144eb',
  storageBucket: 'clone-144eb.appspot.com',
  messagingSenderId: '940664747961',
  appId: '1:940664747961:web:8b361181e327e861e72868',
  measurementId: 'G-2T21ZZPNH9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
