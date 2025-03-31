import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useKeyPress } from "../hooks/useKeyPress";
import { IconType } from "react-icons";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";
import { useState } from "react";
import { useStickyHeader } from "../hooks/useStickyHeader";

const StyledIcon = styled.div<{
  as: IconType;
  $side: "left" | "right";
  $isLandingInView: boolean;
}>`
  z-index: 505;
  position: absolute;
  top: 0;
  ${({ $side }) => ($side === "left" ? "left: 1rem" : "right: 1rem")};

  cursor: pointer;
  padding: 1.2rem;
  width: 5rem;
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
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  z-index: 10;
  background-color: ${({ $isLandingInView, theme }) =>
    $isLandingInView ? "transparent" : `${theme.background}60`};
`;

// ! observe wiewport pos
// ! when bellow start of projects - add bck color to hearder

// const Container = styled.div`
//   position: relative;
// `;
function Header() {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [isLandingInView, setIsLandingInView] = useState(true);

  const handleOpenDropdown = () => {
    // window.scrollTo({ top: 0 });
    setIsDropdownOpen((s) => !s);
  };

  useStickyHeader(setIsLandingInView);

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
