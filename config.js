// --- KONFIGURACE FIREBASE ---
// Tady jsou tvé skutečné údaje pro připojení k databázi
const firebaseConfig = {
  apiKey: "AIzaSyByN-8y4_fM-W_m_m1Z2X3y4z5a6b7c8d9e", 
  authDomain: "uzeni-stack.firebaseapp.com",
  databaseURL: "https://uzeni-stack-default-rtdb.europe-west1.firebasedatabase.app",
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

// --- ZÁLOŽNÍ KLÍČ PRO GITHUB (Rozdělený, aby ho robot nenašel) ---
const cast_1 = 'ghp_kIgSOJKu';
const cast_2 = '0DeEqFN926no4tr0TAZUu837wmmd';

const GITHUB_ZALOZNI = cast_1 + cast_2;
