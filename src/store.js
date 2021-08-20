import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import textReducer from "./Redux/reducers/update_text";

const store = createStore(textReducer, composeWithDevTools(applyMiddleware(),));

export default store;
