import { useState } from "react";
// import { useKeyPress } from "./useKeyPress";

export function useImageSlider(imagesArray: string[]) {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const maxSlide = imagesArray.length - 1;

  const goToImageNum = (imageIndex: number) => {
    setCurrImageIndex(imageIndex);
  };

  const nextSlide = () => {
    if (currImageIndex === maxSlide) goToImageNum(0);
    else goToImageNum(currImageIndex + 1);
    setSlideDirection("right");
  };

  const prevSlide = () => {
    if (currImageIndex === 0) goToImageNum(maxSlide);
    else goToImageNum(currImageIndex - 1);
    setSlideDirection("left");
  };

  // useKeyPress("arrowRight", nextSlide);
  // useKeyPress("arrowLeft", prevSlide);

  return { currImageIndex, nextSlide, prevSlide, slideDirection };
}
