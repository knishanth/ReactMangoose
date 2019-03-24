import { applyMiddleware, createStore } from "redux";
import  thunk  from "redux-thunk";
import * as promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const middleware = composeWithDevTools(applyMiddleware(promise.default, thunk));

export default createStore(rootReducer, middleware);