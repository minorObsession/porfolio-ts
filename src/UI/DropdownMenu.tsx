import styled from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import { useDisableScrollBasedOnCondition } from "../hooks/useDisableScrollingWhenElementActive";

const StyledDropdownMenu = styled(motion.menu)`
  /* // ! DON'T CHANGE absolute/fixed - SCROLLING WILL GET MESSED UP */
  position: fixed;

  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: 1;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

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
  width: 100%;
`;

const SectionListItem = styled(motion.li)`
  &:hover {
    cursor: pointer;
    color: var(--highlight-text);
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

  // ! check if section is visible (then set yOffset)
  const sectionVisible = section.style.opacity === "1";

  console.log(sectionVisible);
  const yOffset = sectionVisible ? -20 : -120;

  const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
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
