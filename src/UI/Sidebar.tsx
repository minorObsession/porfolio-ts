import { useScreenWidthRem } from "../hooks/useScreenWidthRem";

import styled, { css } from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { breakpoints } from "../styles/breakpoints";

type SidebarType = { $screenWidth: number; $rotated?: boolean };

const StyledSidebar = styled.aside<SidebarType>`
  font-size: 1.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ $screenWidth, $rotated }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    $rotated === true &&
    css`
      grid-row: 1;
      align-self: center;
      grid-column: 1/2;
      max-width: 5rem;
      flex-direction: column;
      padding-left: 0rem;
      transform: translateX(-1.5rem);
    `}

  ${({ $screenWidth, $rotated }) =>
    $screenWidth > breakpoints.tabletBreakpoint && $rotated === false && css``}
`;

const P = styled.p<SidebarType>`
  pointer-events: none;
  white-space: nowrap;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    props.$rotated === true &&
    css`
      padding: 6rem;
      transform: rotate(-90deg);
    `}
`;

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

type SidebarProps = {
  rotated?: boolean;
};

function Sidebar({ rotated = false }: SidebarProps) {
  const screenWidth = useScreenWidthRem();

  return (
    <StyledSidebar $screenWidth={screenWidth} $rotated={rotated}>
      {screenWidth > breakpoints.tabletBreakpoint && !rotated && (
        <P $screenWidth={screenWidth} $rotated={rotated} />
      )}
      {screenWidth <= breakpoints.tabletBreakpoint && (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &rarr;{" "}
        </P>
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
      {screenWidth > breakpoints.tabletBreakpoint && rotated && (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &nbsp; &rarr;{" "}
        </P>
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
