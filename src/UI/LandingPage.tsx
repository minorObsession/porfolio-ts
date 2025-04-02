import styled, { css } from "styled-components";
import { FaFilePdf } from "react-icons/fa";

import Sidebar from "./Sidebar";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import bogdan from "../../public/b-edited.png";

import { useTypewriterTextSwitch } from "../hooks/useTypewriterTextSwitch";
import { StyledIcon } from "./Header";
import { downloadPDF } from "../config/helpers";

const StyledLandingPage = styled.section<ScreenWidthType>`
  max-width: 100%;
  max-height: 100vh;

  /* max-height: clamp(85vh, 100vh, 100vh); */
  padding: 0.8rem 1.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr 0.2fr;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-template-columns: 0.1fr 1fr 1.5fr 0.1fr 1fr 1fr;
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
      grid-column: 5 / 7;
    `}
`;

const Image = styled.img<ScreenWidthType>`
  width: 100%;

  max-height: clamp(30vh, 50vh, 100vh);

  object-fit: cover;
  /* object-position: top; */

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      max-height: 100%;
      min-height: 100%;
      object-position: top;
      clip-path: polygon(0% 55px, 100% 0%, 100% 100%, 0% 100%);
    `}
  ${(props) =>
    props.$screenWidth > breakpoints.tabletLandscapeBreakpoint &&
    css`
      /* max-height: 100%; */
      /* object-position: right; */
      /* object-position: middle; */
    `}
  ${(props) =>
    props.$screenWidth > breakpoints.desktopBreakpoint &&
    css`
      /* image to zoom out */
      /* object-position: ; */
    `}

    @media (max-height: 6000px) {
    /* // ! trick to use percentages */
    object-position: center 20%;
  }
`;

const HeadingBox = styled.article<ScreenWidthType>`
  /* position: relative; */
  display: flex;
  flex-direction: column;

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

const MainHeading = styled(Heading)`
  white-space: nowrap;
  line-height: 1.1;
`;

const switchingDescriptions = [
  "A React Developer",
  "Coding ideas into apps",
  "Learning by building",
  "A music producer and DJ",
  "Multilingual - love traveling",
];

function LandingPage({
  id,
  isLandingInView,
}: {
  id: string;
  isLandingInView: boolean;
}) {
  const screenWidth = useScreenWidthRem();
  useTypewriterTextSwitch(switchingDescriptions, true);

  return (
    <StyledLandingPage $screenWidth={screenWidth} id={id}>
      <PhotoBox $screenWidth={screenWidth}>
        <Image $screenWidth={screenWidth} src={bogdan} />
      </PhotoBox>
      <HeadingBox $screenWidth={screenWidth}>
        <MainHeading
          $screenWidth={screenWidth}
          as={
            screenWidth > breakpoints.betweenMobAndTabBreakpoint ? "h1" : "h2"
          }
        >
          My name is Bogdan <span className="line-break"></span>and I am
        </MainHeading>
        <Heading
          $typewriter
          data-typewriter
          as={
            screenWidth > breakpoints.betweenMobAndTabBreakpoint ? "h2" : "h3"
          }
        ></Heading>
      </HeadingBox>
      <Sidebar rotated={screenWidth > breakpoints.tabletBreakpoint && true} />
      <StyledIcon
        as={FaFilePdf}
        $isLandingInView={isLandingInView}
        $bottom={true}
        $side="right"
        onClick={() => downloadPDF("/restaurantResume")}
        $screenWidth={screenWidth}
      />
    </StyledLandingPage>
  );
}

export default LandingPage;
