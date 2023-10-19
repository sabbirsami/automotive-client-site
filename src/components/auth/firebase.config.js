import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCy65mGuDWBhihYpFqJpWtDHUgdGCZnQlQ",
    authDomain: "car-finder-2023.firebaseapp.com",
    projectId: "car-finder-2023",
    storageBucket: "car-finder-2023.appspot.com",
    messagingSenderId: "445788433228",
    appId: "1:445788433228:web:6d809159cfdda7ed58fde9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
