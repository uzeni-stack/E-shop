const firebaseConfig = {
  apiKey: "AIzaSyBUFpm-YlzJX_wd0hoe9kc0gXdteflLGBQ", // Tady byl ten problém
  authDomain: "e-shop-685c2.firebaseapp.com",
  databaseURL: "https://e-shop-685c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-shop-685c2",
  storageBucket: "e-shop-685c2.appspot.com",
  messagingSenderId: "923573029060",
  appId: "1:923573029060:web:152c25dba0bc272e562191"
};

// Inicializace Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
