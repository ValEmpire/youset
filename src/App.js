import { ThemeProvider, Typography } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { theme } from "./theme";

import "./App.css";

function App() {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Welcome to Youset</Typography>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
