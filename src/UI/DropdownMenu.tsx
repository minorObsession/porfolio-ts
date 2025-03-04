import styled, { css } from "styled-components";
import { useDisableScrollBasedOnCondition } from "../hooks/useDisableScrollingWhenElementActive";
// import Sidebar from "./Sidebar";
// import { breakpoints } from "../styles/breakpoints";

const StyledDropdownMenu = styled.section`
  height: 100vh;
  width: 100vw;

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.background};
      color: ${theme.text};
    `}
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;

const SectionsList = styled.ul`
  list-style-type: circle;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
`;

const sectionsNames = [
  "Projects",
  "Web Skills",
  "Contact me",
  "Experience",
  "Certificates",
];

type DropdownMenuProps = {
  isDropdownOpen: boolean;
  screenWidth: number;
  setIsDropdownOpen: (value: boolean) => void;
};

// TODO:
// height transitions
// fix utility div dark mode switch off
//
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth" });
};

function DropdownMenu({
  isDropdownOpen,
  setIsDropdownOpen,
}: // screenWidth,
DropdownMenuProps) {
  const handleScrollToSection = (sectionName: string) => {
    const targetSection = sectionName.toLowerCase().replace(" ", "-");

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    }

    scrollToSection(targetSection);

    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  useDisableScrollBasedOnCondition(isDropdownOpen);

  if (!isDropdownOpen) return null;

  return (
    <StyledDropdownMenu>
      {/* // ! add sidebar  */}
      {/* <Sidebar rotated={true} inDropdown={true} /> */}
      <SectionsList>
        {sectionsNames.map((sectionName) => (
          <li
            key={sectionName}
            onClick={() => handleScrollToSection(sectionName)}
          >
            {sectionName}
          </li>
        ))}
      </SectionsList>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;
