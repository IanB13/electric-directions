import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mapReducer from './mapReducer';
import estimateReducer from './estimateReducer';
import jobReducer from './chargerReducer';
import builderReducer from './locationsReducer';

const reducer = combineReducers({
    jobs: jobReducer,
    builder: builderReducer,
    google: mapReducer,
    estimate: estimateReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)