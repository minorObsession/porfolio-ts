import styled, { css } from "styled-components";
import { useImageSlider } from "../hooks/useImageSlider";
import { hexToRgba } from "../config/helpers";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { breakpoints } from "../styles/breakpoints";
import { motion } from "motion/react";

type ImagesType = {
  images: string[];
  isCardHovered: boolean;
  setIsCardHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

type SlideImageProps = {
  src: string;
  alt?: string;
  $isCardHovered: boolean;
  // $$direction: 'left" | "right"';
};

type SliderButtonProps = {
  $direction: "left" | "right";
  $isCardHovered: boolean;
  onClick: () => void;
  $isDarkMode: boolean;
};

const SlideContainer = styled.div<{ $screenWidth: number }>`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: var(--border-radius-md);
  transition: all 0.8s ease-in-out;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.tabletLandscapeBreakpoint &&
    css`
      /* max-width: 50%; */
    `}
`;

const SlideImage = styled(motion.img)<SlideImageProps>`
  width: 100%;
  height: 100%;

  object-fit: cover;

  filter: blur(${({ $isCardHovered }) => ($isCardHovered ? "0" : "1rem")})
    grayscale(${({ $isCardHovered }) => ($isCardHovered ? "0" : "80%")});
  transition: filter 0.7s ease-in-out, opacity 0.7s ease-in-out,
    visibility 0s linear
      ${({ $isCardHovered }) => ($isCardHovered ? "0s" : "0.3s")};
`;

const SliderButton = styled.button<SliderButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme, $isDarkMode }) =>
    hexToRgba(theme.background, $isDarkMode ? 0.5 : 0.7)};
  color: ${({ theme }) => hexToRgba(theme.text)};
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  ${({ $direction }) =>
    $direction === "left" ? "left: 1.5rem;" : "right: 1.5rem;"};

  filter: blur(${({ $isCardHovered }) => ($isCardHovered ? "0" : "1.5rem")});
  transition: filter 0.7s ease-in-out, opacity 0.7s ease-in-out,
    visibility 0s linear
      ${({ $isCardHovered }) => ($isCardHovered ? "0s" : "0.7s")};
`;

function ImageSlider({ images, isCardHovered }: ImagesType) {
  const { currImageIndex, nextSlide, prevSlide, slideDirection } =
    useImageSlider(images);
  const { isDarkMode } = useDarkMode();
  const screenWidth = useScreenWidthRem();

  return (
    <SlideContainer $screenWidth={screenWidth}>
      <SliderButton
        onClick={prevSlide}
        $isCardHovered={isCardHovered}
        $direction="left"
        $isDarkMode={isDarkMode}
      >
        &larr;
      </SliderButton>
      <SlideImage
        key={currImageIndex} // Key ensures re-render when image changes
        src={images[currImageIndex]}
        alt={`Slide image ${currImageIndex + 1}`}
        $isCardHovered={isCardHovered}
        initial={{
          x: slideDirection === "right" ? "100%" : "-100%",
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          x: slideDirection === "right" ? "100%" : "-100%",
          opacity: 0,
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          duration: 0.8,
        }}
      />
      <SliderButton
        onClick={nextSlide}
        $isCardHovered={isCardHovered}
        $direction="right"
        $isDarkMode={isDarkMode}
      >
        &rarr;
      </SliderButton>
    </SlideContainer>
  );
}

export default ImageSlider;
