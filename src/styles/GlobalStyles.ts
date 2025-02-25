import styled, { createGlobalStyle, css } from "styled-components";

export const lightTheme = {
  text: "#1A1A1A",
  background: "#FFFFFF",
};

export const darkTheme = {
  text: "#F5F5F5",
  background: "#000000",
};

const GlobalStyles = createGlobalStyle`

:root {
  --color-text-light: #1A1A1A;
  --color-text-dark: #F5F5F5;
  --color-background-light: #FFFFFF ;
  --color-background-dark: #000000;


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

body {
  
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;

  transition: all 0.3s ease-in-out;

}
/* Hide scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
`;

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
    `}
`;

export default GlobalStyles;

// ! RESPONSIVE BREAKPOINTS
// 320px (Mobile small) → 32rem
// 480px (Mobile large) → 48rem
// 768px (Tablet) → 76.8rem
// 1024px (Tablet Landscape) → 102.4rem
// 1280px (Small Desktop) → 128rem
// 1440px (Desktop) → 144rem
// 1920px (Large Desktop) → 192rem
