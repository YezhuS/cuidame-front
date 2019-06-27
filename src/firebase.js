import Firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfbaDOJe00XdiZQ2JW_GW_JVKgdsJa0YQ",
    authDomain: "cuidamedaw.firebaseapp.com",
    databaseURL: "https://cuidamedaw.firebaseio.com",
    projectId: "cuidamedaw",
    storageBucket: "cuidamedaw.appspot.com",
    messagingSenderId: "48721804611",
    appId: "1:48721804611:web:7bd08ada3dfabfe0"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore() //base de datos firestore
  export const storage = firebaseApp.storage() //almacenamiento de ficheros
  export const auth = firebaseApp.auth() //autenticación
  export const notif = firebaseApp.messaging() //notificaciones