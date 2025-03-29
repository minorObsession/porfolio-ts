import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import { blink, Heading, typing } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import bogdan from "../../public/b-edited.png";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";

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

function LandingPage({ id }: { id: string }) {
  const screenWidth = useScreenWidthRem();

  const [sentence, setSentence] = useState(0);

  useEffect(() => {
    if (sentence > 2) return;

    const switchingDescriptions = [
      "Coding ideas into apps",
      "Learning by building",
      "third sss sentance",
    ];

    const typewriterElement = document.querySelector(
      "[data-typewriter]"
    ) as HTMLElement | null;

    if (!typewriterElement) return;

    typewriterElement.textContent = switchingDescriptions[sentence];

    // ! After 1st transition - after 2s of mount
    const firstTimeout = setTimeout(() => {
      if (!typewriterElement) return;

      typewriterElement.style.border = "none";

      // ! Disappear the text for 1s
      setTimeout(() => {
        if (sentence === 2) return;
        typewriterElement.style.opacity = "0";

        // ! Reset text and trigger animation
        setTimeout(() => {
          if (sentence === 2) return;
          setSentence((prev) => prev + 1); // increment state correctly
          typewriterElement.style.opacity = "1";
          typewriterElement.style.borderRight = "1px solid";

          // Reset animation to re-trigger
          typewriterElement.style.animation = "none";
          // Give a brief moment for the animation reset
          setTimeout(() => {
            typewriterElement.style.animation = "";
          }, 50);
        }, 1000);
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(firstTimeout);
    };
  }, [sentence]);

  return (
    <StyledLandingPage $screenWidth={screenWidth} id={id}>
      <PhotoBox $screenWidth={screenWidth}>
        <Image $screenWidth={screenWidth} src={bogdan} />
      </PhotoBox>
      <HeadingBox $screenWidth={screenWidth}>
        <Heading
          $screenWidth={screenWidth}
          as={screenWidth > breakpoints.tabletBreakpoint ? "h1" : "h2"}
        >
          I&apos;m Bogdan - a React Developer
        </Heading>
        <Heading
          $typewriter
          data-typewriter
          as={screenWidth > breakpoints.tabletBreakpoint ? "h2" : "h3"}
        ></Heading>
      </HeadingBox>
      <Sidebar rotated={screenWidth > breakpoints.tabletBreakpoint && true} />
    </StyledLandingPage>
  );
}

export default LandingPage;
