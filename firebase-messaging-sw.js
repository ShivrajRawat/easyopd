/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging.js")

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAh1dJ1YwWTWAmPmqnWYSL0ySNK2Z-WsXk",
  authDomain: "easyopd-eb7ba.firebaseapp.com",
  projectId: "easyopd-eb7ba",
  storageBucket: "easyopd-eb7ba.appspot.com",
  messagingSenderId: "948563831343",
  appId: "1:948563831343:web:9a6d45417b31d3b52c34da",
  measurementId: "G-7C0WFD0CCJ",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload){
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const title = 'Background Message Title';
  const options = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(title, options);
});

