// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvV5T0FJmbKI6QjrF7fL6W01vmFR1E0f8",
  authDomain: "tienda-f3b04.firebaseapp.com",
  projectId: "tienda-f3b04",
  storageBucket: "tienda-f3b04.appspot.com",
  messagingSenderId: "593213966987",
  appId: "1:593213966987:web:52905b41508090fa07628e",
  measurementId: "G-0BLRLHS38V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);