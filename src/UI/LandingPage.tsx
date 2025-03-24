import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import { useDarkMode } from "../contexts/DarkModeContext";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../contexts/DropdownContext";
import { useKeyPress } from "../hooks/useKeyPress";
import { IconType } from "react-icons";
import bogdan from "../../public/bogdan-p.jpg";

const StyledLandingPage = styled.section<ScreenWidthType>`
  width: 100vw;
  max-height: 100vh;

  /* max-height: clamp(85vh, 100vh, 100vh); */
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
      padding: 1.5rem;
    `}
`;

const PhotoBox = styled.article<ScreenWidthType>`
  border-radius: var(--border-radius-md);

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 100%;

      grid-row: span 2;
      grid-column: 4 / 7;
    `}
`;

const Image = styled.img<ScreenWidthType>`
  width: 100%;
  max-height: clamp(30vh, 50vh, 100vh);

  object-fit: cover;
  object-position: 15%;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      max-height: 100%;
      object-position: top;
    `}
  ${(props) =>
    props.$screenWidth > breakpoints.tabletLandscapeBreakpoint &&
    css`
      /* max-height: 100%; */
      /* object-position: middle; */
    `}
  ${(props) =>
    props.$screenWidth > breakpoints.desktopBreakpoint &&
    css`
      /* image to zoom out */
      object-position: middle;
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

// const UtilityDiv = styled.div<{
//   $isDarkMode: boolean;
//   $side: "left" | "right";
// }>`
//   ${({ $side }) => ($side === "left" ? "left: 0.5rem;" : "right: 0.5rem;")}
//   position: absolute;
//   top: 0.5rem;
//   display: flex;

//   /* width: calc(); */
//   padding: 1.5rem;
//   z-index: 200;

//   transition: all 0.3s ease-in-out;

//   ${({ theme }) =>
//     theme &&
//     css`
//       /* background-color: "blue"; */
//       background-color: transparent;
//     `}
// `;

const StyledIcon = styled.div<{
  as: IconType;
  $side: "left" | "right";
}>`
  z-index: 505;
  position: absolute; // or fixed, depending on your layout
  top: 0;
  ${({ $side }) => ($side === "left" ? "left: 0" : "right: 0")};

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

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%; // Changed from 100vw
  z-index: 10; // Ensure it's above other elements
  background-color: transparent;
`;

function LandingPage() {
  const screenWidth = useScreenWidthRem();
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();
  useKeyPress("KeyQ", () => setIsDropdownOpen((s) => !s));

  const handleOpenDropdown = () => {
    if (window.screenY === 0) setIsDropdownOpen((s) => !s);

    window.scrollTo({ top: 0, behavior: "instant" });
    setIsDropdownOpen((s) => !s);
  };
  return (
    <>
      {/* // ! dropdown section */}
      <Header>
        {/* <UtilityDiv $isDarkMode={isDarkMode} $side="left"> */}
        <StyledIcon
          $side="left"
          as={isDropdownOpen ? RiCloseLargeFill : GiHamburgerMenu}
          onClick={handleOpenDropdown}
        />
        {/* </UtilityDiv> */}
        {/* <UtilityDiv $isDarkMode={isDarkMode} $side="right"> */}
        {/* Conditionally render FaSun or FaMoon */}
        <StyledIcon
          $side="right"
          as={isDarkMode ? FaSun : FaMoon}
          onClick={() => setIsDarkMode((s) => !s)}
        />
        {/* </UtilityDiv> */}
      </Header>
      <DropdownMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {/* // ! actual landing page */}
      <StyledLandingPage $screenWidth={screenWidth}>
        <PhotoBox $screenWidth={screenWidth}>
          <Image $screenWidth={screenWidth} src={bogdan} />
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
