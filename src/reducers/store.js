import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import mapReducer from "./mapReducer";
import routeReducer from "./routeReducer";
import chargerReducer from "./chargerReducer";
import locationsReducer from "./locationsReducer";

const reducer = combineReducers({
    chargers: chargerReducer,
    locations: locationsReducer,
    google: mapReducer,
    route: routeReducer
});

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);