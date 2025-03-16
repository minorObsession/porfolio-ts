import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useDisableScrollBasedOnCondition } from "../hooks/useDisableScrollingWhenElementActive";
import { useEffect } from "react";

const StyledDropdownMenu = styled(motion.section)`
  width: 100%;
  height: 0;
  z-index: 999;

  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.background};
      color: ${theme.text};
    `}

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  overflow: hidden;
`;

const SectionsList = styled.ul`
  list-style-type: circle;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
`;

const SectionListItem = styled.li`
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const sectionsNames = [
  "Projects",
  "Web Skills",
  "Experience",
  "Certificates",
  "Contact me",
];

type DropdownMenuProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  screenWidth: number;
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth" });
};

function DropdownMenu({
  isDropdownOpen,
  setIsDropdownOpen,
}: DropdownMenuProps) {
  const handleScrollToSection = (sectionName: string) => {
    const targetSection = sectionName.toLowerCase().replace(" ", "-");

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    }

    scrollToSection(targetSection);

    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 10);
  };

  useDisableScrollBasedOnCondition(isDropdownOpen);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "fixed";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDropdownOpen]);
  // if (!isDropdownOpen) return null;

  return (
    <StyledDropdownMenu
      initial={{ height: 0 }}
      animate={{ height: isDropdownOpen ? "100vh" : 0 }}
      exit={{ height: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
      }}
    >
      <SectionsList>
        {sectionsNames.map((sectionName) => (
          <SectionListItem
            key={sectionName}
            onClick={() => handleScrollToSection(sectionName)}
          >
            {sectionName}
          </SectionListItem>
        ))}
      </SectionsList>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;
