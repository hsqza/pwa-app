import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDHQWDrShy4Vpm3sWoERMfBoouImpfWG5o',
  authDomain: 'pwa-app-a962e.firebaseapp.com',
  databaseURL: 'https://pwa-app-a962e.firebaseio.com',
  projectId: 'pwa-app-a962e',
  storageBucket: 'pwa-app-a962e.appspot.com',
  messagingSenderId: '507758515786'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
