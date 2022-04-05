import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { theme } from "./theme";

import "./App.css";

function App() {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <b>Welcome to Youset</b>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
