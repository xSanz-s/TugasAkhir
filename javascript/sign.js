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

const messageDiv = document.getElementById("message");

// Clear messages function
function clearMessage() {
  messageDiv.textContent = "";
  messageDiv.className = "mt-3 text-center";
}

// Show message function
function showMessage(msg, isError = false) {
  messageDiv.textContent = msg;
  messageDiv.className = isError
    ? "mt-3 text-center text-danger"
    : "mt-3 text-center text-success";
}

// Sign Up Form
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearMessage();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showMessage("Sign Up successful! You can now sign in.");
      signUpForm.reset();
      // Switch to sign-in tab after sign up success
      let signInTab = new bootstrap.Tab(document.querySelector("#signin-tab"));
      signInTab.show();
    })
    .catch((error) => {
      showMessage(error.message, true);
    });
});

// Sign In Form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearMessage();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      showMessage("Sign In successful! Welcome back.");
      loginForm.reset();
      window.location.href = "halamanutama.html";
    })
    .catch((error) => {
      showMessage(error.message, true);
    });
});

// Monitor auth state changes (optional)
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    showMessage(`Logged in as ${user.email}`);
  } else {
    // User is signed out
    clearMessage();
  }
});
