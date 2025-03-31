import styled from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { ProjectCardProps } from "./ProjectCard";
import ProjectFeatures from "./ProjectFeatures";
import TechIcons from "./TechIcons";
import { breakpoints } from "../styles/breakpoints";

const StyledProjectInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
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
  color: var(--highlight-text);
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
        <ProjectInfoTitle
          as={screenWidth > breakpoints.tabletBreakpoint ? "h2" : "h3"}
        >
          {project.title}
        </ProjectInfoTitle>
        <ProjectInfoDescription
          as={screenWidth > breakpoints.tabletBreakpoint ? "h3" : "h4"}
        >
          {project.description}
        </ProjectInfoDescription>
      </div>

      {/* Features Section */}
      <ProjectFeatures features={project.features} />

      <IconsBox>
        <Heading as={screenWidth > breakpoints.tabletBreakpoint ? "h3" : "h4"}>
          Core technologies
        </Heading>

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
