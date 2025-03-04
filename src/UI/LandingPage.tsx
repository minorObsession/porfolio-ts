import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import { useDarkMode } from "../contexts/DarkModeContext";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";
import { useKeyPress } from "../hooks/useKeyPress";

const StyledLandingPage = styled.section<ScreenWidthType>`
  width: 100vw;
  height: 100vh;
  padding: 0.8rem 1.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr 0.2fr;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-template-columns: 0.1fr 1fr 1fr 0.1fr 1fr 1fr;
      grid-template-rows: 1fr;
      /* padding: 0.5rem 1.5rem; */
      padding: 1.1rem 1.5rem 3rem 1.5rem;
    `}
`;

const PhotoBox = styled.article<ScreenWidthType>`
  background-color: red;
  /* position: relative; */
  border-radius: var(--border-radius-md);

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 100%;
      grid-row: span 2;
      grid-column: 4 / 7;
    `}
`;

const HeadingBox = styled.article<ScreenWidthType>`
  /* position: relative; */

  grid-row: 2/3;
  text-align: center;
  align-self: center;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-row: 1 / span 2;
      grid-column: 2 / 4;
      width: 100%;
    `}
`;

const UtilityDiv = styled.div<{
  $isDarkMode: boolean;
  $side: "left" | "right";
}>`
  ${({ $side }) => ($side === "left" ? "left: 1.3rem;" : "right: 1.3rem;")}
  position: absolute;
  top: 0.3rem;
  display: flex;

  /* width: calc(); */
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  ${({ theme }) =>
    theme &&
    css`
      /* background-color: "blue"; */
      background-color: ${theme.background};
    `}
`;

const StyledIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;

function LandingPage() {
  const screenWidth = useScreenWidthRem();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  useKeyPress("KeyQ", () => setIsDropdownOpen((s) => !s));

  return (
    <>
      <DropdownMenu
        screenWidth={screenWidth}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <StyledLandingPage $screenWidth={screenWidth}>
        <UtilityDiv $isDarkMode={isDarkMode} $side="left">
          <StyledIcon
            as={GiHamburgerMenu}
            onClick={() => setIsDropdownOpen((s) => !s)}
          />
        </UtilityDiv>
        <PhotoBox $screenWidth={screenWidth}>
          <UtilityDiv $isDarkMode={isDarkMode} $side="right">
            {/* Conditionally render FaSun or FaMoon */}
            <StyledIcon
              as={isDarkMode ? FaSun : FaMoon}
              onClick={() => setIsDarkMode((s) => !s)}
            />
          </UtilityDiv>
        </PhotoBox>
        <HeadingBox $screenWidth={screenWidth}>
          <Heading as="h1">I&apos;m a React developer</Heading>
          <Heading as="h2">I love crafting UIs </Heading>
        </HeadingBox>
        <Sidebar rotated={screenWidth > breakpoints.tabletBreakpoint && true} />
      </StyledLandingPage>
    </>
  );
}

export default LandingPage;
