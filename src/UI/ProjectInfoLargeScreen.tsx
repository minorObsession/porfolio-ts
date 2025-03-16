import styled from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { allIcons } from "../config/icons";
import Icon from "./Icon";
import { ProjectCardProps } from "./ProjectCard";
import ProjectFeatures from "./ProjectFeatures";

const StyledProjectInfoLargeScreen = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const ProjectInfoTitle = styled(Heading)`
  margin-bottom: 1rem;
`;

function ProjectInfoLargeScreen({ project }: ProjectCardProps) {
  return (
    <StyledProjectInfoLargeScreen>
      <ProjectInfoTitle as="h2">{project.title}</ProjectInfoTitle>
      <Heading as="h3">{project.description}</Heading>
      {/* // !CREATE FEATURES ELEMENT */}
      <ProjectFeatures features={project.features} />
      <Heading as="h3">Core technologies</Heading>
      <IconContainer>
        {project.techStack.map((tech) => {
          const matchingIcon = allIcons.find((icon) => icon.name === tech);
          return matchingIcon ? (
            <Icon
              key={matchingIcon.id}
              icon={matchingIcon.icon}
              color={matchingIcon.color}
              isIconGitHub={matchingIcon.name === "GitHub"}
            />
          ) : null;
        })}
      </IconContainer>
    </StyledProjectInfoLargeScreen>
  );
}

export default ProjectInfoLargeScreen;
