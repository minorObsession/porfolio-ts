import styled from "styled-components";
import { useImageSlider } from "../hooks/useImageSlider";
import { useState } from "react";

type ImagesType = {
  images: string[];
};

type SlideImageProps = {
  src: string;
  alt?: string;
  $isCardHovered: boolean;
};

type SliderButtonProps = {
  $direction: "left" | "right";
  $isCardHovered: boolean;
  onClick: () => void;
};
const SliderButton = styled.button<SliderButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
  transition: filter 0.4s ease-in-out, opacity 0.4s ease-in-out,
    visibility 0s linear
      ${({ $isCardHovered }) => ($isCardHovered ? "0s" : "0.3s")};
`;

const SlideImage = styled.img<SlideImageProps>`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: opacity 0.5s ease;

  filter: blur(${({ $isCardHovered }) => ($isCardHovered ? "0" : "1.5rem")});
  transition: filter 0.4s ease-in-out, opacity 0.4s ease-in-out,
    visibility 0s linear
      ${({ $isCardHovered }) => ($isCardHovered ? "0s" : "0.3s")};
`;

const SlideContainer = styled.article`
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: var(--border-radius-md);
  transition: all 0.8s ease-in-out;
`;

function ImageSlider({ images }: ImagesType) {
  const { currImageIndex, nextSlide, prevSlide } = useImageSlider(images);
  const [isCardHovered, setIsCardHovered] = useState(true);

  return (
    <SlideContainer
      onClick={() => setIsCardHovered(true)}
      // onMouseLeave={() => setIsCardHovered(false)}
    >
      <SliderButton
        onClick={prevSlide}
        $isCardHovered={isCardHovered}
        $direction="left"
      >
        &larr;
      </SliderButton>
      <SlideImage
        // ! GET THE ALT TO WORK
        src={images[currImageIndex]}
        $isCardHovered={isCardHovered}
      />
      <SliderButton
        onClick={nextSlide}
        $isCardHovered={isCardHovered}
        $direction="right"
      >
        &rarr;
      </SliderButton>
    </SlideContainer>
  );
}

export default ImageSlider;
