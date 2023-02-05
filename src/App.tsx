import { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/Theme";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={ isDark ? "app" : "appLight"}>
      <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>    
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
