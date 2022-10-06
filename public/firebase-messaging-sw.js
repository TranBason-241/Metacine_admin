// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    // apiKey: "AIzaSyCkt7oSpw5OOSs1xelb7KElfuniLj8Uw7s",
    // authDomain: "telemedicine-fc0ee.firebaseapp.com",
    // projectId: "telemedicine-fc0ee",
    // storageBucket: "telemedicine-fc0ee.appspot.com",
    // messagingSenderId: "872610947801",
    // appId: "1:872610947801:web:ef91ac580600f7c79354c8",
    // measurementId: "G-5KSENF4MHL",

    // new firebase proj

    apiKey: "AIzaSyBDmuPmDncpNKmV4txpoB2erIv90E7rJoA",
    authDomain: "drhome-6cec1.firebaseapp.com",
    projectId: "drhome-6cec1",
    storageBucket: "drhome-6cec1.appspot.com",
    messagingSenderId: "247221704893",
    appId: "1:247221704893:web:06b53d15953ed5929e7fd4",
    measurementId: "G-4230XERTES",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    // eslint-disable-next-line no-console
    console.log("Received background message ", payload);
    let notificationTitle = "";
    switch (payload.notification.title) {
        case "1":
            notificationTitle = "Có một tài khoản mới cần xác thực";
            break;
    }
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png",
    };

    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
