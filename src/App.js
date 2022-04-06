import React from "react";
import { Provider } from "react-redux";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";

function App() {
  return (
    <Provider store={store()}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/getquote"
            element={
              <Layout>
                <QuotePage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
