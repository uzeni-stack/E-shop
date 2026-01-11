// --- KONFIGURACE FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyByN-8y4_fM-W_m_m1Z2X3y4z5a6b7c8d9e", 
  authDomain: "uzeni-stack.firebaseapp.com",
  databaseURL: "https://uzeni-stack-default-rtdb.europe-west1.firebasedatabase.app", // OPRAVENO
  projectId: "uzeni-stack",
  storageBucket: "uzeni-stack.appspot.com",
  messagingSenderId: "587023363385",
  appId: "1:587023363385:web:c6f4b665c36371c676453b"
};

// Inicializace Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// --- POMOCNÉ PROMĚNNÉ ---
const cast_1 = 'ghp_'; // Start tokenu
const cast_2 = '';      // Tady to necháme prázdné, token budeme brát z databáze
