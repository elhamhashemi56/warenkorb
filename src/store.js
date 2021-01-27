// Set up store mit createStore und exportiere es.
// Wir brauchen noch den rootReducer
import rootReducer from "./reducers/rootReducer";


import {createStore} from 'redux';





// const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))
// const store = createStore(rootReducer,
// composedEnhancer)
const store = createStore(rootReducer)
export default store