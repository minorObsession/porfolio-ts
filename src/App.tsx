import styled from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import LandingPage from "./UI/LandingPage";
import WebSkills from "./UI/WebSkills";
import Projects from "./UI/Projects";
import { useDarkMode } from "./contexts/DarkModeContext";
import { useKeyPress } from "./hooks/useKeyPress";

const StyledApp = styled.div``;

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  useKeyPress("KeyD", () => setIsDarkMode((s) => !s));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        {/* // ! landing page */}
        <LandingPage />
        <Projects />
        {/* // ! skills section */}
        <WebSkills isDarkMode={isDarkMode} />
        {/* // ! contact-me section */}

        {/* // ! footer */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
