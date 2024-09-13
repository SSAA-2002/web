import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Visa from './pages/Visa';
import Attestation from './pages/Attestation';
import Insurance from './pages/Insurance';
import PassportServices from './pages/PassportServices';

const root = ReactDOM.createRoot(document.getElementById('root'));


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/visa" element={<Visa />} />
        <Route path="/attestation" element={<Attestation/>} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/passportservices" element={<PassportServices />} />





      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


