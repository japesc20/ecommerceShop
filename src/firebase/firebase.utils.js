import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBgdCsaItL4wCGkSnAuzJ7OyYM9CBYzIh8",
  authDomain: "femashop-7be02.firebaseapp.com",
  projectId: "femashop-7be02",
  storageBucket: "femashop-7be02.appspot.com",
  messagingSenderId: "462699951101",
  appId: "1:462699951101:web:d01dfba54ee8d67f831f94",
  measurementId: "G-DKLCR0FR35"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;