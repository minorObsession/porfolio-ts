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
import { useState } from "react";
import { useStickyHeader } from "./hooks/useStickyHeader";
/*


TODO: */
// animation on download resume btn..
//  box-shadow transition light-dark switch issue!!!

// ! metafronenddevelopercertificate and chingucollabvoyages... SHROTEN FOR SMALL SCREENS SO THEY TAKE UP 2 LINES MAX
// ! (web-skills) --> tooltip with last icon hover

function App() {
  const [isLandingInView, setIsLandingInView] = useState(true);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const screenWidth = useScreenWidthRem();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useStickyHeader(setIsLandingInView);

  useFadeInAllSections();
  useKeyPress("KeyD", () => setIsDarkMode((s) => !s));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <>
        <Header
          isImageLoaded={isImageLoaded}
          isLandingInView={isLandingInView}
          screenWidth={screenWidth}
        />
        <LandingPage
          isImageLoaded={isImageLoaded}
          setIsImageLoaded={setIsImageLoaded}
          isLandingInView={isLandingInView}
          id="landing"
        />
        <Projects id="projects" />
        <Experience screenWidth={screenWidth} id="experience" />
        <Certificates screenWidth={screenWidth} id="certificates" />
        <WebSkills isDarkMode={isDarkMode} id="web-skills" />
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
