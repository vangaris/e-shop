import firebase from 'firebase/app'
import 'firebase/firestore' //add only this two
import 'firebase/auth'

const config = {

    apiKey: "AIzaSyBX7JpBaHcmyhowEatbCkGpzHRAjOt6plo",
    authDomain: "crawn-db-ee4ce.firebaseapp.com",
    databaseURL: "https://crawn-db-ee4ce.firebaseio.com",
    projectId: "crawn-db-ee4ce",
    storageBucket: "crawn-db-ee4ce.appspot.com",
    messagingSenderId: "527985632491",
    appId: "1:527985632491:web:e1ef9bb05ba12bc89e4aae",
    measurementId: "G-TQX71391SL"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase