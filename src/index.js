import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ScrollProvider } from 'react-scroll';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ScrollProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ScrollProvider>

);

