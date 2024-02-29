
import './App.css';
import TodoList from './components/TodoList/TodoList.js';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from './Pages/Navbar.js';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar></Navbar>
          <TodoList></TodoList>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </>

  );
}

export default App;
