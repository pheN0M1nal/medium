import "./App.css";

import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import allReducer from "./reducers";
import { createStore } from "redux";
import Routing from "./Routing";

const store = createStore(
     allReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
     return (
          <Provider store={store}>
               <Routing />
          </Provider>
     );
}

export default App;
