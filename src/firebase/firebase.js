import firebase from 'firebase' 
  var firebaseConfig = {
    apiKey: "AIzaSyAOAoo5Nwj5x2QUI-ht41yKh2GUqbmLSws",
    authDomain: "twitter-app-ddf5b.firebaseapp.com",
    projectId: "twitter-app-ddf5b",
    storageBucket: "twitter-app-ddf5b.appspot.com",
    messagingSenderId: "548638332850",
    appId: "1:548638332850:web:1765dbd72a66d56c2c76ab",
    measurementId: "G-D12S9T51SC"
  };
  const fire= firebase.initializeApp(firebaseConfig);
 
export default fire