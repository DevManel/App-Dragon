import { createStore } from 'redux';
import dragonsReducer from './reducer/dragonReducer';

const store = createStore(dragonsReducer);

export default store;
