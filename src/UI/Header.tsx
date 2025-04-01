import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useKeyPress } from "../hooks/useKeyPress";
import { IconType } from "react-icons";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";

import { breakpoints } from "../styles/breakpoints";

export const StyledIcon = styled.div<{
  as: IconType;
  $side?: "left" | "right";
  $bottom?: boolean;
  $isLandingInView: boolean;
}>`
  z-index: 505;
  position: absolute;
  top: ${({ $bottom }) => ($bottom ? "" : "0")};
  bottom: ${({ $bottom }) => ($bottom ? "0" : "")};
  ${({ $side }) => ($side === "left" ? "left: 0rem" : "right: 0rem")};

  cursor: pointer;
  padding: 1.2rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? `${theme.background}` : "transparent"};

  /* color: ${({ theme }) => theme.text}; */

  ${({ as }) =>
    as === RiCloseLargeFill &&
    css`
      scale: 1.2;
      font-weight: bolder;
    `}

  &:hover {
    color: var(--highlight-text);
    transition: color 0.2s ease-in;
  }
`;

const StyledHeader = styled.header<{ $isLandingInView: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%; /* Use width instead of max-width */
  z-index: 10;
  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? "transparent" : `${theme.background}80`};
`;
const DownloadResume = styled.a`
  font-size: 1.5rem;
  /* background-color: ; */
`;

// const Container = styled.div`
//   position: relative;
// `;
function Header({
  screenWidth,
  isLandingInView,
}: {
  screenWidth: number;
  isLandingInView: boolean;
}) {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleOpenDropdown = () => {
    // window.scrollTo({ top: 0 });
    setIsDropdownOpen((s) => !s);
  };

  useKeyPress("KeyQ", handleOpenDropdown);
  return (
    <>
      <StyledHeader $isLandingInView={isLandingInView}>
        <StyledIcon
          $isLandingInView={isLandingInView}
          $side="left"
          as={isDropdownOpen ? RiCloseLargeFill : GiHamburgerMenu}
          onClick={handleOpenDropdown}
        />
        <StyledIcon
          $isLandingInView={isLandingInView}
          $side="right"
          as={isDarkMode ? FaSun : FaMoon}
          onClick={() => setIsDarkMode((s) => !s)}
        />
        <DownloadResume href="/restaurantResume.pdf" download>
          {screenWidth < breakpoints.tabletBreakpoint ? "" : "Download"} PDF
          Resume
        </DownloadResume>
      </StyledHeader>
      {/* <Container> */}
      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {/* </Container> */}
    </>
  );
}

export default Header;
