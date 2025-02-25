import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";

const StyledLandingPage = styled.section<ScreenWidthType>`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr 0.2fr;

  padding: 1.5rem;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-template-columns: 0.1fr 1fr 1fr;
      grid-template-rows: 1fr;
    `}
`;

const PhotoBox = styled.article<ScreenWidthType>`
  background-color: red;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 100%;
      grid-row: span 2;
      grid-column: 3/4;
    `}
`;

const HeadingBox = styled.article<ScreenWidthType>`
  grid-row: 2/3;
  text-align: center;
  align-self: center;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-row: 1 / span 2;
      grid-column: 2/3;

      width: 100%;
    `}
`;

function LandingPage() {
  const screenWidth = useScreenWidthRem();

  return (
    <StyledLandingPage $screenWidth={screenWidth}>
      <PhotoBox $screenWidth={screenWidth}></PhotoBox>
      <HeadingBox $screenWidth={screenWidth}>
        <Heading as="h1">I&apos;m a React developer</Heading>
        <Heading as="h2">I love crafting UIs </Heading>
      </HeadingBox>
      <Sidebar />
    </StyledLandingPage>
  );
}

export default LandingPage;
