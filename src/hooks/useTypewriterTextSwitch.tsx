import { useEffect, useState } from "react";

// ! loopSentences HAS A BUG!! WHEN SET TO TRUE
export const useTypewriterTextSwitch = (
  sentenceNumsArray: string[],
  loopSentences = false
) => {
  const [sentenceNum, setSentenceNum] = useState(0);
  const lastSentenceIndex = sentenceNumsArray.length - 1;

  useEffect(() => {
    if (sentenceNum > lastSentenceIndex && !loopSentences) return;

    const typewriterElement = document.querySelector(
      "[data-typewriter]"
    ) as HTMLElement | null;

    if (!typewriterElement) return;

    // ! if reset - do this with a timer
    typewriterElement.textContent = sentenceNumsArray[sentenceNum];

    // ! After 1st transition - after 2s of mount
    const mainTimeout = setTimeout(() => {
      if (!typewriterElement) return;

      typewriterElement.style.border = "none";

      if (sentenceNum === lastSentenceIndex && !loopSentences) {
        typewriterElement.style.border = "none";
        return;
      }
      // ! Disappear the text for 1s
      setTimeout(() => {
        typewriterElement.style.opacity = "0";

        // ! Reset text and trigger animation
        setTimeout(() => {
          typewriterElement.style.opacity = "1";
          typewriterElement.style.borderRight = "1px solid";
          typewriterElement.style.animation = "none";
          setTimeout(() => {
            typewriterElement.style.animation = "";
          }, 50); // timeout to reset animation

          if (sentenceNum === lastSentenceIndex && loopSentences) {
            setSentenceNum(0);
            return;
          } else setSentenceNum((prev) => prev + 1);
        }, 1000); // to re-apppear text + reset animation
      }, 1000); // to dissapear text
    }, 2000); // to start after mount

    return () => {
      clearTimeout(mainTimeout);
    };
  }, [sentenceNumsArray, lastSentenceIndex, sentenceNum, loopSentences]);
};

// ! USAGE EXAMPLE

// * CSS
// const headingFontSizes = {
//   h1: "3.5rem",
//   h2: "3rem",
//   h3: "2rem",
//   h4: "1.5rem",
// } as const; // `as const` makes values
// // Type definitions
// interface HeadingProps {
//   $screenWidth?: number;
//   as?: keyof typeof headingFontSizes; // Ensures `as` is a valid key
//   $typewriter?: boolean;
// }

// // Styled Heading component
// export const Heading = styled.h1<HeadingProps>`
//   text-align: center;
//   transition: all 0.5s ease-in-out;
//   font-size: ${({ as = "h1" }) =>
//     headingFontSizes[
//       as as keyof typeof headingFontSizes
//     ]}; /* Ensure proper indexing */

//   ${({ $typewriter }) =>
//     $typewriter &&
//     css`
//       overflow: hidden;
//       white-space: nowrap;
//       margin-inline: auto;
//       border-right: 1px solid;
//       animation: ${typing} 2s steps(22) forwards,
//         ${blink} 0.75s step-end infinite;
//     `}
// `;

// * JSX
//  <Heading
//    $typewriter
//    data-typewriter
//    as={screenWidth > breakpoints.tabletBreakpoint ? "h2" : "h3"}
//  ></Heading>;
