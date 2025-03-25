// import styled from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import LandingPage from "./UI/LandingPage";
import WebSkills from "./UI/WebSkills";
import Projects from "./UI/Projects";

import { useDarkMode } from "./contexts/DarkModeContext";
import { useKeyPress } from "./hooks/useKeyPress";
import ContactMe from "./UI/ContactMe";
import { useScreenWidthRem } from "./hooks/useScreenWidthRem";
import Experience from "./UI/Experience";
import Certificates from "./UI/Certificates";
import { useFadeInAllSections } from "./hooks/useFadeInAllSections";
import Header from "./UI/Header";

// TODO:
// !
// !
// !

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const screenWidth = useScreenWidthRem();

  useFadeInAllSections();
  useKeyPress("KeyD", () => setIsDarkMode((s) => !s));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <>
        <Header />
        {/* // ! landing page */}
        <LandingPage />
        <Projects id="projects" />
        {/* // ! skills section */}
        <Experience screenWidth={screenWidth} id="experience" />
        <Certificates screenWidth={screenWidth} id="certificates" />
        <WebSkills isDarkMode={isDarkMode} id="web-skills" />
        {/* // ! contact-me section - Footer */}
        <ContactMe
          isDarkMode={isDarkMode}
          screenWidth={screenWidth}
          id="contact-me"
        />
      </>
    </ThemeProvider>
  );
}

export default App;
