import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import bogdan from "../../public/b-edited.png";

const StyledLandingPage = styled.section<ScreenWidthType>`
  width: 100lvw;
  max-height: 100lvh;

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

  /* object-position: top; */

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

function LandingPage({ id }: { id: string }) {
  const screenWidth = useScreenWidthRem();

  return (
    <StyledLandingPage $screenWidth={screenWidth} id={id}>
      <PhotoBox $screenWidth={screenWidth}>
        <Image $screenWidth={screenWidth} src={bogdan} />
      </PhotoBox>
      <HeadingBox $screenWidth={screenWidth}>
        <Heading as="h1">I&apos;m a React developer</Heading>
        <Heading as="h2">I love crafting UIs </Heading>
      </HeadingBox>
      <Sidebar rotated={screenWidth > breakpoints.tabletBreakpoint && true} />
    </StyledLandingPage>
  );
}

export default LandingPage;
