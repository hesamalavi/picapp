import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: 'AIzaSyB9GpcoU-JkiF-3h3wX7BpWAefaByxWiRI',
    authDomain: 'picapp-2020.firebaseapp.com',
    databaseURL: 'https://picapp-2020.firebaseio.com',
    projectId: 'picapp-2020',
    storageBucket: 'picapp-2020.appspot.com',
    messagingSenderId: '410088424394',
    appId: '1:410088424394:web:0a8c0b77e7b0b104acc533',
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
export default app;

export { projectStorage, projectFirestore, timestamp };
