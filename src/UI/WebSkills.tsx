import styled from "styled-components";
// import { breakpoints } from "../styles/breakpoints";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { Heading } from "../styles/GlobalStyles";
import TechIcons from "./TechIcons";

const StyledWebSkills = styled.section<{ $screenWidth: number }>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

type WebSkillsProps = {
  isDarkMode: boolean;
  id: string;
};

function WebSkills({ isDarkMode, id }: WebSkillsProps) {
  const screenWidth = useScreenWidthRem();

  return (
    <StyledWebSkills $screenWidth={screenWidth} id={id}>
      <Heading as="h1">Web Skills and technologies</Heading>
      <TechIcons isDarkMode={isDarkMode} screenWidth={screenWidth} />
    </StyledWebSkills>
  );
}

export default WebSkills;
