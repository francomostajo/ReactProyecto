import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/Styles/styleGlobal.jsx'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW26Sm52DYQjAheV9xL12UCIu9z5NAch0",
  authDomain: "reactproyecto-amarillotienda.firebaseapp.com",
  projectId: "reactproyecto-amarillotienda",
  storageBucket: "reactproyecto-amarillotienda.appspot.com",
  messagingSenderId: "25224251817",
  appId: "1:25224251817:web:d28d1d435129efcd341cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
