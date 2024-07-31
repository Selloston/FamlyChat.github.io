        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
        import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
    
        // Your web app's Firebase configuration
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

register.addEventListener("click", (e) => 
        {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
        
            createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    set(ref(database, 'users/' + user.uid), {
        email: email,
        password: password
})
    .then(() => {
  // Data saved successfully!
    alert("The Account Have Created successfully");
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
    // ..
    alert(errorMessage);
});
        });

let login = document.getElementById("login");

login.onclick = function()
{
    location.href = "login.html";
}