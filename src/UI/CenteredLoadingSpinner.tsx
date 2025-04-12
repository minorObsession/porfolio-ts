import styled, { keyframes } from "styled-components";
import "../../src/index.css";

// ! centered spinner with backdrop blur
// ! needs a parent with relative position

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--color-main-500, #f59e0b);
  animation: ${spin} 1s linear infinite;
  z-index: 10;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

// * to load image after spinner
//  main div as container for image  (pos. relative).. background main color overflow-hidden!!
//  div inside that one - containing the spinner (pos. absolute) - rendered when !imageLoaded
//  img also inside main div (onLoad - set imageLoaded state to true)
//  img to have tranition opacity depending on imageLoaded

interface LoadingSpinnerProps {
  spinnerColor?: string;
}

function LoadingSpinner({ spinnerColor }: LoadingSpinnerProps) {
  console.log("renderin spinner.");
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path
          className={`${spinnerColor || "white"}`}
          d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"
        ></path>
      </svg>
    </div>
  );
}

export default LoadingSpinner;
