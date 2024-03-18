
import './App.css';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from './Pages/Navbar.js';
import Header from './components/Header';
import Content from './Content';
import ContentFooter from './components/ContentFooter.js';
import Footer from './components/Footer';
import { TodoProvider } from "./context/TodoContext";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar></Navbar>
          <TodoProvider>
            <div className='center'>
            <section className="todoapp">
              <Header />
              <Content />
              <ContentFooter />
            </section>

            </div>
            
            <Footer />
          </TodoProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>

    </>

  );
}

export default App;
