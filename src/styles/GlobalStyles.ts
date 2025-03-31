import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { breakpoints } from "./breakpoints";
import { hexToRgba } from "../config/helpers";

export const lightTheme = {
  text: "#2B2F36",
  background: "#F4F7FB",
};

export const darkTheme = {
  text: "#E3E6EC",
  background: "#101417",
};
// export const lightTheme = {
//   text: "#1A1A1A",
//   background: "#FFFFFF",
// };

// export const darkTheme = {
//   text: "#F5F5F5",
//   background: "#000000",
// };

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



  --box-shadow-sm-light: 1px 5px 6px 3px rgba(0, 0, 0, 0.15);  /* Light theme shadow */
  --box-shadow-sm-dark: 1px 5px 6px 3px rgba(255, 255, 255, 0.3);  /* Dark theme shadow */

  --box-shadow-light: 6px 8px 35px rgba(0, 0, 0, 0.2);
  --box-shadow-dark: 6px 8px 15px rgba(255, 255, 255, 0.3);

  /* Default box shadow (will change based on theme) */
  --box-shadow: var(--box-shadow-light);
}

.no-scroll {
  overflow: hidden;
}

.light-theme {
  --box-shadow: var(--box-shadow-light);
  --box-shadow-sm: var(--box-shadow-sm-light);
  --highlight-text: var(--color-main-700);
}

.dark-theme {
  --box-shadow: var(--box-shadow-dark);
  --box-shadow-sm: var(--box-shadow-sm-dark);
  --highlight-text: var(--color-main-400);
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  --border-b-1: 1px solid ${(props) => props.theme.text}; 
  
  min-height: 100vh;
  min-width: 100vw;
  
  /* overflow-x: hidden; */
  /* font-family: 'Oxanium', sans-serif; */
  font-family: 'Saira', sans-serif;
  /* font-family: 'Orbitron', sans-serif; */

  /* // ! causes the "shaking" */
  /* transition: all 0.3s ease-in-out; */

}

section:not(#projects) {
/* margin-bottom: 3rem; */
border-bottom: var(--border-b-1)

}

#experience {
  border-top: var(--border-b-1)

}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
section, footer {
  padding: 3rem 0.5rem;
    opacity: 0;
  transition: opacity 0.8s ease-in-out, transform 0.6s ease-in-out;

}

footer,section:not(:first-of-type) {
    transform: translateY(10rem);
      margin: 0 auto;

  max-width: 90%;

@media (min-width: 768px) {
    max-width: 85%;
  }
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

input:focus,
textarea:focus,
button:focus {
  outline: 2px solid #3178c6;
  border-color: #3178c6;
  box-shadow: 0 0 4px rgba(49, 120, 198, 0.5);
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
  h1: "3.5rem",
  h2: "3rem",
  h3: "2rem",
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
  transition: all 0.5s ease-in-out;
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
      animation: ${typing} 3s steps(50) forwards,
        ${blink} 0.75s step-end infinite;
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
  }

  ${({ $screenWidth }) =>
    $screenWidth !== undefined &&
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      margin: 0.5rem auto;
      padding: 0.6rem 1.5rem;
      /* font-size: 1rem; */
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
  font-size: 1rem;
  white-space: nowrap;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--box-shadow-sm);

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
    $screenWidth <= breakpoints.mobileLargeBreakpoint
      ? css`
          padding: 0.5rem;
          top: -3.2rem;
          left: -1.5rem;
        `
      : css`
          padding: 0.7rem;
          top: -4rem;
          left: -1rem;
        `}
`;

export default GlobalStyles;
