// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfL0xK4X_VJMwaI3Jc9y5VjEmzTlPlSbM",
    authDomain: "push-test-73053.firebaseapp.com",
    projectId: "push-test-73053",
    storageBucket: "push-test-73053.appspot.com",
    messagingSenderId: "270791579735",
    appId: "1:270791579735:web:2162ff1781dfcbf80d2b12",
    measurementId: "G-S22Q3ZCQP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);