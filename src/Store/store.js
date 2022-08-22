import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./Login/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  loginReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import loginReducer from "./Login/Reducer";

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// const store = createStore(
//   loginReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );

// export default store;
