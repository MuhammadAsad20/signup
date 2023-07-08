//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
//  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyDnIr_2TxM-RXRyEffEsVNZhWUVjHmb2P0",
//    authDomain: "login-6f370.firebaseapp.com",
//    projectId: "login-6f370",
//    storageBucket: "login-6f370.appspot.com",
//    messagingSenderId: "969560496903",
//    appId: "1:969560496903:web:8de568c8e440edbf20c3a2"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);
// var sub = document.getElementById('sub')
// sub.addEventListener("click", ()=>{


//     var username = document.getElementById('username').value
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     alert('user created!')
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });
// })
