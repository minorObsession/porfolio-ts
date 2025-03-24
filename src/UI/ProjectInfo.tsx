import styled from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { ProjectCardProps } from "./ProjectCard";
import ProjectFeatures from "./ProjectFeatures";
import TechIcons from "./TechIcons";

const StyledProjectInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.6rem;
  /* margin-top: 2rem; */

  box-shadow: var(--box-shadow-sm);
  border-radius: var(--border-radius-md);
  border: none; /* Remove any existing border */
`;

const ProjectInfoTitle = styled(Heading)`
  line-height: 1.8;
  font-weight: 800;
`;

const ProjectInfoDescription = styled(Heading)`
  flex-grow: 0;
  font-style: italic;
`;

const IconsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ProjectInfo({
  project,
  screenWidth,
  isDarkMode,
}: ProjectCardProps & { screenWidth: number; isDarkMode: boolean }) {
  return (
    <StyledProjectInfo>
      <div>
        <ProjectInfoTitle as="h2">{project.title}</ProjectInfoTitle>
        <ProjectInfoDescription as="h4">
          {project.description}
        </ProjectInfoDescription>
      </div>

      {/* Features Section */}
      <ProjectFeatures features={project.features} />

      <IconsBox>
        <Heading as="h4">Core technologies</Heading>

        {/* Tech Icons with Tooltip */}
        <TechIcons
          screenWidth={screenWidth}
          isDarkMode={isDarkMode}
          iconsArray={project.techStack}
        />
      </IconsBox>
    </StyledProjectInfo>
  );
}

export default ProjectInfo;
