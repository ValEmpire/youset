import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";

// Redux
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store()}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getquote" element={<QuotePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
