// firebase.js

// Usa la misma versión para ambos:
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Tu configuración
const firebaseConfig = {
  apiKey: "AIzaSyAS1EWDA8s9Rd19-DTnbT-qKsHv3c8OjmI",
  authDomain: "login-inventario-proyecto-inte.firebaseapp.com",
  projectId: "login-inventario-proyecto-inte",
  storageBucket: "login-inventario-proyecto-inte.firebasestorage.app",
  messagingSenderId: "779557304485",
  appId: "1:779557304485:web:f0de259f2acd0f6703b54c"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
