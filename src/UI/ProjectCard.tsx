import styled, { css } from "styled-components";
import ImageSlider from "./ImageSlider";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { breakpoints } from "../styles/breakpoints";

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

type StyledProjectCard = {
  $screenWidth: number;
};

// ! max-height to prevent layout shifts
// ! min-height to spread element full height
const StyledProjectCard = styled.article<StyledProjectCard>`
  border-radius: var(--border-radius-md);

  ${({ $screenWidth }) =>
    $screenWidth <= breakpoints.mobileLargeBreakpoint
      ? css`
          max-height: 20rem;
          min-height: auto;
        `
      : css`
          max-height: 40rem;
          /* min-height: 100%; */
        `}
`;

function ProjectCard({ project }: ProjectCardProps) {
  const screenWidth = useScreenWidthRem();
  return (
    <StyledProjectCard $screenWidth={screenWidth}>
      <ImageSlider images={project.previewImages} />
    </StyledProjectCard>
  );
}

export default ProjectCard;
