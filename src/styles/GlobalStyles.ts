import styled, { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "./breakpoints";

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



  --box-shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);


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

body, #root{
  will-change: background-color, color;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  --border-b-1: 1px solid ${(props) => props.theme.text}; 
  
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;

  transition: all 0.3s ease-in-out;

}

section {
/* margin-bottom: 3rem; */
border-bottom: var(--border-b-1)
}

section, footer {
  padding: 3rem 1.5rem;
}


@media (min-width: 1024px) {
section {
/* margin-bottom: 5rem; */
}
  section:not(:first-child),footer {
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

export const Heading = styled.h1<{ $screenWidth?: number; children: string }>`
  text-align: center;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.5rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.5rem;
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
  font-size: 1.6rem;
  letter-spacing: 1px;

  font-weight: 700;

  & span {
    flex-grow: 1;
    justify-self: center;
  }

  ${({ $screenWidth }) =>
    $screenWidth !== undefined &&
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      margin: 0.5rem auto;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      letter-spacing: 0.8px;
    `}

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.background};
      color: ${theme.text};
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

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.background};
      color: ${theme.text};
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
          padding: 1rem;
          top: -5rem;
          left: -3rem;
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
