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
};

/**
  * Takes user's auth object and store inside of the database.
  *
  * @param {object} auth  user's auth object, get it from library when log in.
  * @param {object} additonalData needed in the future
  * @return {userRef} user reference object.
  */
export const createUserProfileDocument = async (userAth, additionalData) => {

    if (!userAth) return;

    const userRef = firestore.doc(`users/${userAth.uid}`)

    const snapShot = await userRef.get();

    // console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (er) {
            console.log('Error creating user', console.log(er))
        }

    }

    return userRef
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase