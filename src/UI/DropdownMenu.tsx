import styled, { css } from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import { useDisableScrollBasedOnCondition } from "../hooks/useDisableScrollingWhenElementActive";
import { useEffect } from "react";

const StyledDropdownMenu = styled(motion.menu)`
  position: stickyq; // Prevents layout shifts
  left: 0;
  right: 0;
  width: 100%;
  max-height: 100vh; // Consistent max height
  overflow: hidden;
  z-index: 1;

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
`;

const SectionsList = styled(motion.ul)`
  list-style-type: circle;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  width: 100%; // Ensures consistent width
`;

const SectionListItem = styled(motion.li)`
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const sectionsNames = [
  "Projects",
  "Experience",
  "Certificates",
  "Web Skills",
  "Contact me",
];

type DropdownMenuProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ block: "start", behavior: "smooth" });
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

    setIsDropdownOpen(false);
  };

  useDisableScrollBasedOnCondition(isDropdownOpen);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDropdownOpen]);

  // ! this line fucks up negative part of transition
  // if (!isDropdownOpen) return null;
  return (
    <LayoutGroup>
      <StyledDropdownMenu
        layout
        layoutRoot
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: isDropdownOpen ? "100vh" : 0,
          opacity: isDropdownOpen ? 1 : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <SectionsList
          initial={{ opacity: 0 }}
          animate={{ opacity: isDropdownOpen ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {sectionsNames.map((sectionName) => (
            <SectionListItem
              key={sectionName}
              layout
              onClick={() => handleScrollToSection(sectionName)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.01 }}
            >
              {sectionName}
            </SectionListItem>
          ))}
        </SectionsList>
      </StyledDropdownMenu>
    </LayoutGroup>
  );
}

export default DropdownMenu;
