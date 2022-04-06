import React from "react";
import { Provider } from "react-redux";
import Layout from "./layout";
import { store } from "./redux/store";

import "./App.css";
import { Typography } from "@mui/material";

function App() {
  return (
    <Provider store={store()}>
      <Layout>
        <Typography variant="h4">HELLO</Typography>
      </Layout>
    </Provider>
  );
}

export default App;
