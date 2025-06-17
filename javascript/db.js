
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, onValue, get } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD80y7jAbZB5fjxBuPfq3UpUU1NY8BT6JE",
    authDomain: "tugasakhir-970f9.firebaseapp.com",
    databaseURL: "https://tugasakhir-970f9-default-rtdb.firebaseio.com",
    projectId: "tugasakhir-970f9",
    storageBucket: "tugasakhir-970f9.firebasestorage.app",
    messagingSenderId: "558954760051",
    appId: "1:558954760051:web:35a97d43a3b5eafe2c6706"
};

        // Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);