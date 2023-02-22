import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyChBOeVlHVSHcbN_XSUeob_qz2jnW0JTTQ",
    authDomain: "jobs-7d694.firebaseapp.com",
    projectId: "jobs-7d694",
    storageBucket: "jobs-7d694.appspot.com",
    messagingSenderId: "762372677330",
    appId: "1:762372677330:web:8d880ce6de35e20aaed70b"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export function registerUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        return user;
    });
}



