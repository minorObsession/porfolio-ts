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
  z-index: 1000;
  position: absolute;
  cursor: pointer;
  padding: 1.2rem;
  /* min-height: 4.5rem; */
  width: 4.5rem;
  height: 4.5rem;
  /* line-height: 1.8px; */

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  will-change: transform;
  ${({ $bottom }) =>
    $bottom
      ? css`
          bottom: 0.8rem;
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

  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? theme.background : "transparent"};

  ${({ as }) =>
    as === RiCloseLargeFill &&
    css`
      scale: 1.2;
      font-weight: bolder;
    `}

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
  height: 4.5rem;
  z-index: 10;
  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? "transparent" : `${theme.background}80`};
`;

const DownloadResume = styled.a`
  font-size: 1.5rem;

  color: var(--highlight-text);

  &:hover {
    filter: contrast(2);
    text-decoration: underline;
    text-underline-offset: 2.5px;
  }

  transition: all 0.3s ease-in-out;
`;
interface HeaderProps {
  screenWidth: number;
  isLandingInView: boolean;
  isImageLoaded: boolean;
}
function Header({ screenWidth, isLandingInView, isImageLoaded }: HeaderProps) {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleOpenDropdown = () => {
    setIsDropdownOpen((s) => !s);
  };

  useKeyPress("KeyQ", handleOpenDropdown);

  if (!isImageLoaded) return null;

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

      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </>
  );
}

export default Header;
