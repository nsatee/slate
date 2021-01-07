import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "./components/Reset";
import CreateNewDiary from "./pages/CreateNewDiary";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <div className="App">
        <CreateNewDiary />
      </div>
    </ThemeProvider>
  );
}

export default App;
