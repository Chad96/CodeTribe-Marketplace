// firebase.js
const admin = require("firebase-admin");

const serviceAccount = require("./config/firebase-service-account.json"); //the file we Ddwnload from Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
