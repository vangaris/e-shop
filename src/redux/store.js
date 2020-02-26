import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rooReducer from '../redux/root-reducer'


const store = createStore(rooReducer, applyMiddleware(logger))

export default store