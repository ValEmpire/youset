import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

export function store() {
  return createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
