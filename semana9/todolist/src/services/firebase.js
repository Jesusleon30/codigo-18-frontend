// esto son credenciales unicas son personales
// lo sacamos desde firabase (google) creando la propria cuenta

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCly3beWkAt-aQQaUYAHEVC_g2yh4xufc8",
  authDomain: "react-g18-codigo-todolist.firebaseapp.com",
  projectId: "react-g18-codigo-todolist",
  storageBucket: "react-g18-codigo-todolist.appspot.com",
  messagingSenderId: "179388337265",
  appId: "1:179388337265:web:caa8b881f70172b3d29fd0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);