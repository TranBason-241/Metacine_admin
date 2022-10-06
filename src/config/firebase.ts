// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, MessagePayload, onMessage } from "firebase/messaging";
import // API_KEY,
// APP_ID,
// AUTH_DOMAIN,
// CLOUD_MESSAGING_TOKEN, // MEASUREMENT_ID,
// MESSAGING_SENDER_ID, // PROJECT_ID,
// STORAGE_BUCKET,
"src/configurations";

import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    // apiKey: API_KEY,
    // authDomain: AUTH_DOMAIN,
    // projectId: PROJECT_ID,
    // storageBucket: STORAGE_BUCKET,
    // messagingSenderId: MESSAGING_SENDER_ID,
    // appId: APP_ID,
    // measurementId: MEASUREMENT_ID,

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const messaging = getMessaging(app);

export const db = getFirestore(app);

export const getTokenFirebase = async () => {
    let currentToken = "";
    try {
        currentToken = await getToken(messaging, {
            // vapidKey: CLOUD_MESSAGING_TOKEN,
            vapidKey:
                "BG_vpUyBamHPXwVCF9mJLj7v95fE61VnvuNM5RQFDUrAQaOqunkUuc7RmgS3bfNgPRNqAxjJSq0Rm9rCx7UP5mQ",
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log("An error occurred while retrieving token. ", error);
    }
    console.log(currentToken);
    return currentToken;
};

export const onMessageListener = () =>
    new Promise<MessagePayload>((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
export default app;
