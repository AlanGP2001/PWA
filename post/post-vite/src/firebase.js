// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging } from 'firebase/messaging';

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
// const analytics = getAnalytics(app);
export const messaging = getMessaging(app);