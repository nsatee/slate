import React from "react";
import { ThemeProvider } from "styled-components";
import CreateNewDiary from "./pages/CreateNewDiary";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CreateNewDiary />
      </div>
    </ThemeProvider>
  );
}

export default App;
