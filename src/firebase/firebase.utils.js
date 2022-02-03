import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

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