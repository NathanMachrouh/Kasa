import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Error from './pages/Error';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import Header from './components/Header';
import Banner from './components/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals