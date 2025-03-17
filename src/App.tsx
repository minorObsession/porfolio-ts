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
import { useEffect } from "react";

// prettier-ignore
// * TOOO:
//  figure out how to put isDarkMode into a css variable so i'm not passing it around like a mad man
// hovering tech icons adjust

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const screenWidth = useScreenWidthRem();

  useEffect(()=> {
    const allSections = [
      ...document.querySelectorAll("section"),
      document.querySelector("footer"),
    ].filter((el):el is HTMLElement => el!==null);


    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const callback:IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if  ( entry.isIntersecting ) {
        const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)'
        } 
      });
    };

    const observer = new IntersectionObserver(callback, options);

  allSections.forEach(section=>observer.observe(section))

return () => {
  allSections.forEach(s=> observer.unobserve(s))
observer.disconnect()
} 

  },[])

  useKeyPress("KeyD", () => setIsDarkMode((s) => !s));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <>
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
