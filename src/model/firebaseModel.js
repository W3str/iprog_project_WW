// FirebaseModel.js
import app from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
    return signInWithPopup(auth, provider);
}

export function monitorAuthState(callback) {
    return onAuthStateChanged(auth, callback);
}
