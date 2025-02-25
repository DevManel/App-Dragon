import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import du composant App
import './index.css'; // Fichier CSS global
import { Provider } from 'react-redux'; // Fournir le store Redux à l'application
import store from './store'; // Import du store Redux

// Rendre l'application dans le DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Fournir le store à toute l'application */}
      <App />  {/* Composant principal de l'application */}
    </Provider>
  </React.StrictMode>
);
