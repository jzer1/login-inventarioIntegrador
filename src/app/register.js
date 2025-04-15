import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import {auth} from './firebase.js'

const regis = document.querySelector('#register-form'); // Seleccionamos el formulario por el id

regis.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = regis['email-regis'].value;
    const password = regis['password-regis'].value;

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById('error-msg').innerText = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        document.getElementById('error-msg').style.display = 'none'; // Oculta el mensaje si todo sale bien
    } catch (error) {
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById('error-msg').innerText = error.message;
    }
});

