


// esto son credenciales unicas son personales 
// lo sacamos desde firabase (google) creando la propria cuenta 



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCly3beWkAt-aQQaUYAHEVC_g2yh4xufc8",
  authDomain: "react-g18-codigo-todolist.firebaseapp.com",
  projectId: "react-g18-codigo-todolist",
  storageBucket: "react-g18-codigo-todolist.appspot.com",
  messagingSenderId: "179388337265",
  appId: "1:179388337265:web:caa8b881f70172b3d29fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// function to create an user
export async function createUser(email, password) {
    try {
      const authentication = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      return authentication.user;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      return null;
    }
  }
  
  export async function signIn(email, password) {
    try {
      const authentication = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      return authentication.user;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      return null;
    }
  }
