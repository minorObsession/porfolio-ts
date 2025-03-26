import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useKeyPress } from "../hooks/useKeyPress";
import { IconType } from "react-icons";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";
import { useEffect, useRef, useState } from "react";
import { useStickyHeader } from "../hooks/useStickyHeader";

const StyledIcon = styled.div<{
  as: IconType;
  $side: "left" | "right";
  $isLandingInView: boolean;
}>`
  z-index: 505;
  position: absolute; // or fixed, depending on your layout
  top: 0;
  ${({ $side }) => ($side === "left" ? "left: 1rem" : "right: 1rem")};

  cursor: pointer;
  padding: 0.7rem;
  width: 5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    css`
      color: ${theme.text};
      background-color: ${theme.background};
    `}

  ${({ as }) =>
    as === RiCloseLargeFill &&
    css`
      scale: 1.2;
      font-weight: bolder;
    `}
`;

const StyledHeader = styled.header<{ $isLandingInView: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  z-index: 10;

  ${({ $isLandingInView, theme }) =>
    $isLandingInView
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: ${theme.background};
        `}
`;

// ! observe wiewport pos
// ! when bellow start of projects - add bck color to hearder

function Header() {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [isLandingInView, setIsLandingInView] = useState(true);
  // ! cannot
  const landingRef = useRef<HTMLElement | null>(null);

  const handleOpenDropdown = () => {
    window.scrollTo({ top: 0 });
    setIsDropdownOpen((s) => !s);
  };

  // ! sync ref with
  useEffect(() => {
    landingRef.current = document.getElementById("landing");
  }, []);

  useStickyHeader({
    elementToObserve: landingRef.current,
    setStateFn: setIsLandingInView,
  });

  useKeyPress("KeyQ", handleOpenDropdown);
  return (
    <>
      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <StyledHeader $isLandingInView={isLandingInView} ref={landingRef}>
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
    </>
  );
}

export default Header;
