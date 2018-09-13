import * as firebase from 'firebase/app'

import 'firebase/database'

var config = {
  apiKey: "專案設定>Cloud Messageing>舊版伺服器金鑰",
  authDomain: "sherrywork-bb2ec.firebaseapp.com",
  databaseURL: "https://sherrywork-bb2ec.firebaseio.com/",
  projectId: "sherrywork-bb2ec",
  messagingSenderId: "710139833896"

};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase

// let app = firebase.initializeApp(config)

// let db = app.database();
// let booksRef = db.ref('books');
