import styled from "styled-components";
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

// prettier-ignore
// * TOOO:
//  figure out how to put isDarkMode into a css variable so i'm not passing it around like a mad man
// hovering tech icons adjust
// !  large screen:
//  sidebar rotated a bit off
//  social icons too small
// footer too small
// ! move hamburger menu icon and create the actual menu overlay

const StyledApp = styled.div``;

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const screenWidth = useScreenWidthRem();

  useKeyPress("KeyD", () => setIsDarkMode((s) => !s));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
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
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
