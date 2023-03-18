import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVhQBzSoT-kNV8FGYrTTOs4MxIVR3y8A4",
  authDomain: "code-react-e-commerce.firebaseapp.com",
  projectId: "code-react-e-commerce",
  storageBucket: "code-react-e-commerce.appspot.com",
  messagingSenderId: "498962637762",
  appId: "1:498962637762:web:083de75a2e1cdb036f2c5b"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


