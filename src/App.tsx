import styled from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import LandingPage from "./UI/LandingPage";
import { useState } from "react";
import WebSkills from "./UI/WebSkills";
import Projects from "./UI/Projects";

const StyledApp = styled.div``;

// StyledApp.defaultProps=
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        {/* // ! landing page */}
        <LandingPage />
        <Projects />
        {/* // ! skills section */}
        <WebSkills />
        {/* // ! contact-me section */}

        {/* // ! footer */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
