import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";


const signInForm = document.querySelector('#login-form');

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;


  if (password.length < 6) {
    document.getElementById('error-msg').style.display = 'block';
    document.getElementById('error-msg').innerText = 'La contraseña debe tener al menos 6 caracteres.';
    return;
}

try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
  
    document.getElementById('error-msg').style.display = 'none'; // Oculta el mensaje si todo sale bien
} catch (error) {
    document.getElementById('error-msg').style.display = 'block';
    document.getElementById('error-msg').innerText = error.message;
}
});

