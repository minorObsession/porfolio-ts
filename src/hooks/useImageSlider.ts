import { useState } from "react";

export function useImageSlider(imagesArray: string[]) {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const maxSlide = imagesArray.length - 1;

  const goToImageNum = (imageIndex: number) => {
    setCurrImageIndex(imageIndex);
  };

  const nextSlide = () => {
    if (currImageIndex === maxSlide) goToImageNum(0);
    else goToImageNum(currImageIndex + 1);
  };

  const prevSlide = () => {
    if (currImageIndex === 0) goToImageNum(maxSlide);
    else goToImageNum(currImageIndex - 1);
  };

  return { currImageIndex, nextSlide, prevSlide };
}
