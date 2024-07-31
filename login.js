import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDq8LmdcyIj-JlXFHhPuD8j3tVouJeo6EY",
    authDomain: "chat-5f469.firebaseapp.com",
    projectId: "chat-5f469",
    storageBucket: "chat-5f469.appspot.com",
    messagingSenderId: "179856152021",
    appId: "1:179856152021:web:5909749958e1216680995c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);


    loginit.addEventListener("click", (e) => 
    {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          let logemail = new Date();
      
              update(ref(database, 'users/' + user.uid), {
              last_log: logemail
      })
          .then(() => {
        // Data saved successfully!
          alert("You Have Login successfully");
          location.href = "index.html";
      })
      .catch((error) => {
        // The write failed...
          alert(error);
      });
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("The password Wrong")
        });
      
    })
    
let Sign = document.getElementById("Sign");

Sign.onclick = function()
{
    location.href = "register.html";
}