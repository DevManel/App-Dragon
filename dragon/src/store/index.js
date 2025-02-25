import { createStore } from 'redux';
import dragonsReducer from './reducer/dragonReducer'; // Importation du reducer

// Création du store Redux avec le reducer dragonsReducer
const store = createStore(dragonsReducer);

export default store; // Exportation du store pour l'utiliser dans main.jsx
