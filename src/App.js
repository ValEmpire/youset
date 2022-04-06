import React from "react";
import { Provider } from "react-redux";
import Layout from "./layout";
import { store } from "./redux/store";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <Provider store={store()}>
      <Layout>
        <HomePage />
      </Layout>
    </Provider>
  );
}

export default App;
