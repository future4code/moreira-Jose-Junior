import { ThemeProvider } from "@material-ui/core/styles";
import React from "react"
import Router from "./routes/Router"
import theme from "./constants/theme"



const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Router/>
    </ThemeProvider>
  );
}

export default App;
