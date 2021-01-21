// Set up store mit createStore und exportiere es.
// Wir brauchen noch den rootReducer
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer,
composedEnhancer)
export default store