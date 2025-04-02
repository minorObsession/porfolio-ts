import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { breakpoints } from "./breakpoints";
import { hexToRgba } from "../config/helpers";

export const lightTheme = {
  text: "#2B2F36",
  background: "#F4F7FB",
  name: "light",
};

export const darkTheme = {
  text: "#E3E6EC",
  background: "#101417",
  name: "dark",
};

const GlobalStyles = createGlobalStyle`

:root {


  /* Main color */
--color-main-300: #A1B6F0; /* Soft pastel blue */
--color-main-400: #8297E0; /* Light blue */
--color-main-500: #4A6EC3; /* Main color */
--color-main-600: #3F5DA8; /* Deeper contrast */
--color-main-700: #354E8E; /* Darkest shade */

    /* Gray */
  --color-gray-0: #fff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f1f3f5;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #ced4da;
  --color-gray-500: #adb5bd;
  --color-gray-600: #4b5563;
  --color-gray-700: #495057;
  --color-gray-800: #343a40;
  --color-gray-900: #212529;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --border-radius-xl: 12px;
  --border-radius-2xl: 18px;
  --border-radius-pill: 42%;



  --box-shadow-sm-light: 3px 3px 3px  drgba(0, 0, 0, 0.15);  /* Light theme shadow */
  --box-shadow-sm-hover-light: 9px 14px 9px 9px rgba(0, 0, 0, 0.15), 9px 14px 9px 9px white;
  --box-shadow-sm-dark: 3px 3px 3px   rgba(255, 255, 255, 0.2);  /* Dark theme shadow */
  --box-shadow-sm-hover-dark: 5px 8px 5px 5px rgba(255, 255, 255, 0.2), 5px 8px 5px 5px black;

  --box-shadow-tooltip-light: 6px 6px 6px rgba(0, 0, 0, 0.15);
  --box-shadow-tooltip-dark: 4px 4px 4px rgba(255, 255, 255, 0.2);

  --box-shadow-light: 6px 8px 35px rgba(0, 0, 0, 0.2);
  --box-shadow-dark: 6px 8px 15px rgba(255, 255, 255, 0.3);

  /* Default box shadow (will change based on theme) */
  --box-shadow: var(--box-shadow-light);
}

.light-theme {
  --box-shadow: var(--box-shadow-light);
  --box-shadow-sm: var(--box-shadow-sm-light);
  --highlight-text: var(--color-main-700);
  --box-shadow-sm-hover:var(--box-shadow-sm-hover-light)
}

.dark-theme {
  --box-shadow: var(--box-shadow-dark);
  --box-shadow-sm: var(--box-shadow-sm-dark);
  --highlight-text: var(--color-main-400);
    --box-shadow-sm-hover:var(--box-shadow-sm-hover-dark)

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.no-scroll {
  overflow: hidden;
}




::selection {
  /* background-color: #B3A9E3;   */
}

html {
  font-size: 62.5%;
}

a:hover,svg:hover {
color: var(--highlight-text);
transition: color 0.2s ease-in-out;
}



body, #root{
  will-change: background-color, color;
  margin: 0 auto;

  height: auto !important;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  --border-b-1: 1px solid ${(props) => props.theme.text}; 

  font-family: 'Saira', sans-serif;
  /* font-family: 'Oxanium', sans-serif; */
  /* font-family: 'Orbitron', sans-serif; */

}


section:not(#projects) {
/* margin-bottom: 3rem; */
border-bottom: var(--border-b-1)

}

section, footer {
    /* max-width: 100%; */
// ! this prevents horizontal scrolling!!! */
  overflow-x: hidden;
  padding: 3rem 1.5rem;
    opacity: 0;
  transition: opacity 0.8s ease-in-out, transform 0.6s ease-in-out;

}
section:not(:first-of-type){ 
transform: translateY(10rem);
}

footer,section:not(:first-of-type) {
    
      margin: 0 auto;
  max-width: 90%;

@media (min-width: 768px) {
    max-width: 85%;
  }
}

a {
  font-weight: 500;
  /* color: #646cff; */
  text-decoration: inherit;
}


 button {
  border-radius: 8px;
  border: 1px solid var(--color-main-500);
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: inherit;
  /* background-color: #1a1a1a; */
  cursor: pointer;
    color: ${({ theme }) => theme.text};

  /* transition: border-color 0.25s; */
    transition: all 0.2s ease;

}
button:hover {
  border-color: var(--highlight-text);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
} 

input:focus,
textarea:focus,
button:focus {
  outline: 2px solid #4A6EC3;
  border-color: #4A6EC3;
  box-shadow: 3px 2px 10px #354E8E 
 }

 
#experience {
  border-top: var(--border-b-1)

}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}


#projects {
  max-width: 90%;

@media (min-width: 768px) {
    max-width: 100%;
  }
}


@media (min-width: 900px) {
section {
/* margin-bottom: 5rem; */
}
  section,footer {
    padding: 5.5rem 5rem; 
  }
}




/* // ! forcing exact line break */
.line-break {
  display: inline-block;
  white-space: pre;  
}

@media (min-width: 767px) and (max-width: 1200px),
       (max-width: 500px) {
  .line-break {
    display: block;  
  }
}

/* Hide scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
`;

// Typewriter animation
export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;
// Typewriter animation
export const blink = keyframes`
50% {
  border-color: transparent;
}
`;

// Font sizes mapping
const headingFontSizes = {
  h1: "4rem",
  h2: "3rem",
  h3: "2.5rem",
  h4: "1.5rem",
} as const; // `as const` makes values
// Type definitions
interface HeadingProps {
  $screenWidth?: number;
  as?: keyof typeof headingFontSizes; // Ensures `as` is a valid key
  $typewriter?: boolean;
}

// Styled Heading component
export const Heading = styled.h1<HeadingProps>`
  text-align: center;
  /* transition: all 0.5s ease-in-out; */
  font-size: ${({ as = "h1" }) =>
    headingFontSizes[
      as as keyof typeof headingFontSizes
    ]}; /* Ensure proper indexing */

  ${({ $typewriter }) =>
    $typewriter &&
    css`
      color: var(--highlight-text);
      overflow: hidden;
      max-width: fit-content;
      white-space: nowrap;
      margin-inline: auto;
      border-right: 1px solid;
      padding-right: 5px;
      animation: ${typing} 2s steps(28) forwards, ${blink} 1s step-end infinite;
    `}
`;

export const OverlayImageBox = styled.div<{
  $isDarkMode: boolean;
  $screenWidth: number;
  $isCardHovered?: boolean;
}>`
  /* position: relative; */
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  min-width: 50%;
  border-radius: var(--border-radius-2xl);

  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  letter-spacing: 1px;

  font-weight: 800;

  & span {
    flex-grow: 1;
    justify-self: center;
    cursor: pointer;
  }
  & span:hover {
    filter: contrast(1.4);
  }

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.tabletLandscapeBreakpoint &&
    css`
      margin: 0.5rem auto;
      font-size: 1.8rem;
      letter-spacing: 1.2px;
    `}

  ${({ theme, $isDarkMode }) =>
    theme &&
    css`
      background-color: ${hexToRgba(theme.background, $isDarkMode ? 0.5 : 0.7)};
      color: ${hexToRgba(theme.text)};
    `}
`;

export const Tooltip = styled.span<{
  $isDarkMode: boolean;
  $screenWidth: number;
  $isHoveringTechIcons?: boolean;
}>`
  position: absolute;

  padding: 0.3rem 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1.1px;
  white-space: nowrap;
  border-radius: var(--border-radius-xl);
  box-shadow: ${({ theme }) => `var(--box-shadow-tooltip-${theme.name})`};

  ${({ theme, $isDarkMode }) =>
    theme &&
    css`
      background-color: ${hexToRgba(theme.background, $isDarkMode ? 0.5 : 0.7)};
      color: ${hexToRgba(theme.text)};
    `}

  ${({ theme, $isHoveringTechIcons }) =>
    $isHoveringTechIcons &&
    css`
      background-color: ${theme.text};
      color: ${theme.background};
    `}

  ${({ $screenWidth }) =>
    $screenWidth <= breakpoints.tabletBreakpoint
      ? css`
          padding: 0.5rem;
          top: -4rem;
          left: -1.5rem;
        `
      : css`
          padding: 0.7rem;
          top: -4.5rem;
          left: -1rem;
        `}
`;

export default GlobalStyles;
