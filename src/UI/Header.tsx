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
  $screenWidth: number;
}>`
  z-index: 505;
  position: absolute;

  ${({ $bottom }) =>
    $bottom
      ? css`
          bottom: 0;
        `
      : css`
          top: 0;
        `}

  ${({ $side }) =>
    $side === "left"
      ? css`
          left: 0rem;
        `
      : css`
          right: 0rem;
        `}

  cursor: pointer;
  padding: 1.2rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? theme.background : "transparent"};

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

  @media (min-width: ${breakpoints.tabletLandscapeBreakpoint * 10}px) {
    width: 5rem;
    height: 5rem;

    ${({ $bottom }) =>
      $bottom
        ? css`
            bottom: 0rem;
          `
        : css`
            top: 0rem;
          `}
    ${({ $side }) =>
      $side === "left"
        ? css`
            left: 1rem;
          `
        : css`
            right: 1rem;
          `};
  }
`;

const StyledHeader = styled.header<{ $isLandingInView: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
  z-index: 10;
  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? "transparent" : `${theme.background}80`};
`;
const DownloadResume = styled.a`
  font-size: 1.5rem;

  &:hover {
    filter: contrast(1.2);
  }
`;

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
          $screenWidth={screenWidth}
        />
        <StyledIcon
          $isLandingInView={isLandingInView}
          $side="right"
          as={isDarkMode ? FaSun : FaMoon}
          onClick={() => setIsDarkMode((s) => !s)}
          $screenWidth={screenWidth}
        />
        {screenWidth > breakpoints.tabletBreakpoint && (
          <DownloadResume
            href="/restaurantResume.pdf"
            download="Bogdan Terzic resume"
          >
            PDF Resume
          </DownloadResume>
        )}
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
