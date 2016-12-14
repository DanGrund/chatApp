import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhDz3uSiMwmyJJtQKH7HkH9ragpQLN0_A",
    authDomain: "chatapp-1c809.firebaseapp.com",
    databaseURL: "https://chatapp-1c809.firebaseio.com",
    storageBucket: "chatapp-1c809.appspot.com",
    messagingSenderId: "22031629031"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
