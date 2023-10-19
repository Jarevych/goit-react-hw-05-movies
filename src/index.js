import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <App />
    {/* basename="http://localhost:3000/goit-react-hw-05-movies/" */}
    </BrowserRouter>
  </React.StrictMode>
);
