const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.newRegisterUser = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });