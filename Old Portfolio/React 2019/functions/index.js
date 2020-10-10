//firebase deploy --only functions
//console set global variable
//firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change) => {

  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'guillaume.rachet@gmail.com',
    to: 'guillaume.rachet@gmail.com',
    subject: "[rachet.fr] - " + val.subject + " <" + val.mail + ">",
    text: "<" + val.mail + ">" + "\n\r" + val.message
  };

  return mailTransport.sendMail(mailOptions).then(() => console.log('Mail sent to: guillaume.rachet@gmail.com',
    val.email))
    .catch((error) => console.error('There was an error while sending the email:', error));
});
