// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js')
 
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
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log('mensaje recibido', payload)
    const tituloNotificacion = payload.notification.title
    const options = {
        body: payload.notification.body,
        icon: '../img/40.png',
    }
    self.registration.showNotification(tituloNotificacion, options)
})