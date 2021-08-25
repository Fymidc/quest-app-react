import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

// Note: this API requires redux@>=3.1.0


const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
  
);

export default store;