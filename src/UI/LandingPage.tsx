import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { darkTheme, Heading, lightTheme } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLandingPage = styled.section<ScreenWidthType>`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr 0.2fr;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-template-columns: 0.1fr 1fr 1fr;
      grid-template-rows: 1fr;
    `}
`;

const PhotoBox = styled.article<ScreenWidthType>`
  background-color: red;
  position: relative;
  border-radius: var(--border-radius-md);

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 100%;
      grid-row: span 2;
      grid-column: 3/4;
    `}
`;

const HeadingBox = styled.article<ScreenWidthType>`
  grid-row: 2/3;
  text-align: center;
  align-self: center;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-row: 1 / span 2;
      grid-column: 2/3;
      width: 100%;
    `}
`;

const UtilityDiv = styled.div<{ $isDarkMode: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  padding: 0.7rem 1.8rem;

  display: flex;
  gap: 1.5rem;

  border-radius: var(--border-radius-tiny);

  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.$isDarkMode
      ? css`
          background-color: ${darkTheme.background};
        `
      : css`
          background-color: ${lightTheme.background};
        `}
`;

const StyledIcon = styled.div`
  font-size: 2rem;
`;

function LandingPage() {
  const screenWidth = useScreenWidthRem();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <StyledLandingPage $screenWidth={screenWidth}>
      <PhotoBox $screenWidth={screenWidth}>
        <UtilityDiv $isDarkMode={isDarkMode}>
          {/* Conditionally render FaSun or FaMoon */}
          <StyledIcon
            as={isDarkMode ? FaSun : FaMoon}
            onClick={() => setIsDarkMode((s) => !s)}
          />
          <StyledIcon as={GiHamburgerMenu} />
        </UtilityDiv>
      </PhotoBox>
      <HeadingBox $screenWidth={screenWidth}>
        <Heading as="h1">I&apos;m a React developer</Heading>
        <Heading as="h2">I love crafting UIs </Heading>
      </HeadingBox>
      <Sidebar />
    </StyledLandingPage>
  );
}

export default LandingPage;
