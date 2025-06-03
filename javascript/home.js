// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80y7jAbZB5fjxBuPfq3UpUU1NY8BT6JE",
  authDomain: "tugasakhir-970f9.firebaseapp.com",
  databaseURL: "https://tugasakhir-970f9-default-rtdb.firebaseio.com",
  projectId: "tugasakhir-970f9",
  storageBucket: "tugasakhir-970f9.firebasestorage.app",
  messagingSenderId: "558954760051",
  appId: "1:558954760051:web:35a97d43a3b5eafe2c6706",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is logged in
    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const currentUser = document.getElementById("currentUser");

    login.classList.add("d-none");
    currentUser.classList.remove("d-none");
    currentUser.innerText = user.email;
    logout.classList.remove("d-none");

    logout.addEventListener("click", () => {
      auth.signOut().then(() => {
        alert("Berhasil Log Out");
        currentUser.classList.add("d-none");
        login.classList.remove("d-none");
      });
    });
  } else {
    login.classList.remove("d-none");
    currentUser.classList.add("d-none");
    logout.classList.add("d-none");
  }
});
