import styled from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { ProjectCardProps } from "./ProjectCard";
import ProjectFeatures from "./ProjectFeatures";
import TechIcons from "./TechIcons";

const StyledProjectInfoLargeScreen = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ProjectInfoTitle = styled(Heading)``;
const IconsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ProjectInfoLargeScreen({
  project,
  screenWidth,
  isDarkMode,
}: ProjectCardProps & { screenWidth: number; isDarkMode: boolean }) {
  return (
    <StyledProjectInfoLargeScreen>
      <ProjectInfoTitle as="h2">{project.title}</ProjectInfoTitle>
      <Heading as="h3">{project.description}</Heading>

      {/* Features Section */}
      <ProjectFeatures features={project.features} />

      <IconsBox>
        <Heading as="h3">Core technologies</Heading>

        {/* Tech Icons with Tooltip */}
        <TechIcons
          screenWidth={screenWidth}
          isDarkMode={isDarkMode}
          iconsArray={project.techStack}
        />
      </IconsBox>
    </StyledProjectInfoLargeScreen>
  );
}

export default ProjectInfoLargeScreen;
