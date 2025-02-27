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
  inFooter?: boolean;
};

function Sidebar({ rotated = false, inFooter = false }: SidebarProps) {
  const getPContent = () => {
    if (screenWidth > breakpoints.tabletBreakpoint && !rotated)
      return <P $screenWidth={screenWidth} $rotated={rotated} />;
    if (screenWidth <= breakpoints.tabletBreakpoint && inFooter)
      return (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect &rarr;
        </P>
      );
    if (screenWidth <= breakpoints.tabletBreakpoint && !inFooter)
      return (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &rarr;
        </P>
      );
    if (screenWidth > breakpoints.tabletBreakpoint && rotated)
      return (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &nbsp; &rarr;
        </P>
      );
    return null;
  };

  const screenWidth = useScreenWidthRem();
  const pContent = getPContent();
  console.log(pContent);
  return (
    <StyledSidebar $screenWidth={screenWidth} $rotated={rotated}>
      {!pContent?.props.$rotated && pContent}

      {[
        {
          icon: FaLinkedin,
          link: "https://www.linkedin.com/in/bogdanterzic95/",
        },
        { icon: FaGithub, link: "https://github.com/minorObsession" },
        { icon: FaFacebook, link: "https://www.facebook.com/terzinjoo" },
      ].map(({ icon: Icon, link }, index) => (
        <Icon
          key={index}
          onClick={() => openLink(link)}
          style={{ cursor: "pointer" }}
        />
      ))}

      {pContent?.props.$rotated && pContent}
    </StyledSidebar>
  );
}

export default Sidebar;
