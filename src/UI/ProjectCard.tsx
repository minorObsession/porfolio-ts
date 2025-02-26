import styled from "styled-components";
import ImageSlider from "./ImageSlider";

type Project = {
  title: string;
  description: string;
  previewImages: string[];
  gitHub: string;
  deploy: string;
  techStack: string[];
};

type ProjectCardProps = {
  project: Project;
};

const StyledProjectCard = styled.article`
  border-radius: var(--border-radius-md);
`;

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <StyledProjectCard>
      <ImageSlider images={project.previewImages} />
    </StyledProjectCard>
  );
}

export default ProjectCard;
