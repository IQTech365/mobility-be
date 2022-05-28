const firebaseAdmin = require('firebase-admin');
const serviceAccount = require("./yatinapp-a7d15-firebase-adminsdk-o2oay-7d63544e70.json");

const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

const storageRef = admin.storage().bucket(`gs://yatinapp-a7d15.appspot.com`);

module.exports = {
    storageRef
}


