
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.AGUN_APIKEY,
    authDomain: import.meta.env.AGUN_AUTHDOMAIN,
    projectId: import.meta.env.AGUN_PROJECTID,
    storageBucket: import.meta.env.AGUN_STORAGEBUCKET,
    messagingSenderId: import.meta.env.AGUN_MESSAGINGSENDERID,
    appId: import.meta.env.AGUN_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);