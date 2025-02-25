import { useScreenWidthRem } from "../hooks/useScreenWidthRem";

import styled, { css } from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";

const StyledSidebar = styled.aside<ScreenWidthType>`
  justify-self: center;
  align-self: flex-end;
  font-size: 1.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      grid-row: 1;
      align-self: center;
      grid-column: 1/2;
      max-width: 2rem;
      flex-direction: column;
    `}
`;

const P = styled.p<ScreenWidthType>`
  white-space: nowrap;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    css`
      padding: 6rem;
      transform: rotate(-90deg);
    `}
`;

function Sidebar() {
  const screenWidth = useScreenWidthRem();

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <StyledSidebar $screenWidth={screenWidth}>
      {screenWidth <= breakpoints.tabletBreakpoint && (
        <P $screenWidth={screenWidth}>connect with me &rarr; </P>
      )}
      <FaLinkedin
        onClick={() => openLink("https://www.linkedin.com/in/bogdanterzic95/")}
        style={{ cursor: "pointer" }}
      />

      <FaGithub
        onClick={() => openLink("https://github.com/minorObsession")}
        style={{ cursor: "pointer" }}
      />

      <FaFacebook
        onClick={() => openLink("https://www.facebook.com/terzinjoo")}
        style={{ cursor: "pointer" }}
      />
      {screenWidth > breakpoints.tabletBreakpoint && (
        <P $screenWidth={screenWidth}>connect with me &nbsp; &rarr; </P>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
