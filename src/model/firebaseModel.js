import app from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, arrayUnion, updateDoc, getDoc } from 'firebase/firestore';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export async function signInWithGoogle() {
    const userCredential = await signInWithPopup(auth, provider);
    const userRef = doc(firestore, 'users', userCredential.user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        await setDoc(userRef, {
            email: userCredential.user.email,
            pinnedCities: []
        });
    }
    return {
        email: userCredential.user.email,
        userId: userCredential.user.uid,
        pinnedCities: docSnap.data()?.pinnedCities || []
    };
}


export async function addPinnedCity(city) {
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        await updateDoc(userRef, {
            pinnedCities: arrayUnion(city)
        });
    } else {
        throw new Error('No user is signed in');
    }
}


export function monitorAuthState(callback) {
    return onAuthStateChanged(auth, callback);
}