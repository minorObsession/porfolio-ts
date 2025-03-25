import styled, { css } from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useKeyPress } from "../hooks/useKeyPress";
import { IconType } from "react-icons";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";

const StyledIcon = styled.div<{
  as: IconType;
  $side: "left" | "right";
}>`
  z-index: 505;
  position: absolute; // or fixed, depending on your layout
  top: 0;
  ${({ $side }) => ($side === "left" ? "left: 0.7em" : "right: 0.7rem")};

  cursor: pointer;
  padding: 1rem;
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

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  z-index: 10;
  background-color: transparent;
`;

function Header() {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleOpenDropdown = () => {
    window.scrollTo({ top: 0 });
    setIsDropdownOpen((s) => !s);
  };

  useKeyPress("KeyQ", handleOpenDropdown);
  return (
    <>
      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <StyledHeader>
        <StyledIcon
          $side="left"
          as={isDropdownOpen ? RiCloseLargeFill : GiHamburgerMenu}
          onClick={handleOpenDropdown}
        />

        <StyledIcon
          $side="right"
          as={isDarkMode ? FaSun : FaMoon}
          onClick={() => setIsDarkMode((s) => !s)}
        />
      </StyledHeader>
    </>
  );
}

export default Header;
