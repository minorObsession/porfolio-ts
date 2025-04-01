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
      max-width: 3rem;
      flex-direction: column;

      /* transform: translateX(-1rem); */
    `}

  ${({ $screenWidth, $rotated }) =>
    $screenWidth > breakpoints.tabletBreakpoint && $rotated === false && css``}
`;

const P = styled.p<SidebarType>`
  z-index: 100000;
  pointer-events: none;
  white-space: nowrap;

  ${(props) =>
    props.$screenWidth > breakpoints.tabletBreakpoint &&
    props.$rotated === true &&
    css`
      /* // ! to seperate the p from icons */
      margin: 6rem;
      transform: rotate(-90deg);
    `}
`;

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
// const downloadLink = (url: string, filename = "download") => {
//   console.log("calling downl");
//   const anchor = document.createElement("a");
//   anchor.href = url;
//   anchor.download = filename; // Suggests a filename for the download
//   document.body.appendChild(anchor);
//   anchor.click();
//   document.body.removeChild(anchor); // Clean up after click
// };

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
