import { useScreenWidthRem } from "../hooks/useScreenWidthRem";

import styled, { css } from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { breakpoints } from "../styles/breakpoints";

type SidebarType = { $screenWidth: number; $rotated?: boolean };

const StyledSidebar = styled.aside<SidebarType>`
  font-size: 1.7rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ $screenWidth, $rotated }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    $rotated &&
    css`
      grid-row: 1;
      align-self: center;
      grid-column: 1/2;
      max-width: 3rem;
      flex-direction: column;
    `}

  ${({ $screenWidth, $rotated }) =>
    $screenWidth > breakpoints.tabletBreakpoint && $rotated === false && css``}
`;

const P = styled.p<SidebarType>`
  display: abos;
  white-space: nowrap;
  color: inherit; // Make sure color is explicitly defined
  /* Isolate this element from other elements' hover effects */
  isolation: isolate;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    props.$rotated &&
    css`
      /* Use transform instead of rotate property */
      transform: rotate(-90deg);

      /* Adjust positioning to prevent overlap with icons */
      margin: 6rem;
      position: relative; /* Create a stacking context */
      z-index: 2; /* Make sure this is above other elements */
    `}
`;

// Style the icon links to contain their hover effects
const IconLink = styled.a`
  cursor: pointer;
  color: inherit;
  position: relative;
  z-index: 1;

  /* Contain hover effects to just this element */
  &:hover {
    color: inherit; /* Or your hover color */
  }
`;
const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

type SidebarProps = {
  rotated?: boolean;
  inFooter?: boolean;
  inDropdown?: boolean;
};

function Sidebar({
  rotated = false,
  inFooter = false,
  inDropdown = false,
}: SidebarProps) {
  const screenWidth = useScreenWidthRem();

  const getPContent = () => {
    if (screenWidth > breakpoints.tabletBreakpoint && !rotated)
      return <P $screenWidth={screenWidth} $rotated={rotated} />;

    if (screenWidth <= breakpoints.tabletBreakpoint && !inFooter)
      return (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &rarr;
        </P>
      );
    if (
      (screenWidth > breakpoints.tabletBreakpoint && rotated) ||
      (rotated && inDropdown)
    )
      return (
        <P $screenWidth={screenWidth} $rotated={rotated}>
          connect with me &nbsp; &rarr;
        </P>
      );
    return null;
  };
  const pContent = getPContent();
  return (
    <StyledSidebar $screenWidth={screenWidth} $rotated={rotated}>
      {!pContent?.props.$rotated && pContent}
      {[
        {
          icon: FaLinkedin,
          link: "https://www.linkedin.com/in/bogdanterzic95/",
        },
        { icon: FaGithub, link: "https://github.com/minorObsession" },
        {
          icon: FaFacebook,
          link: "https://www.facebook.com/terzinjoo",
        },
      ].map(({ icon: Icon, link }, index) => (
        <IconLink
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openLink(link)}
          style={{ cursor: "pointer", color: "inherit" }}
        >
          <Icon />
        </IconLink>
      ))}

      {pContent?.props.$rotated && pContent}
    </StyledSidebar>
  );
}

export default Sidebar;
