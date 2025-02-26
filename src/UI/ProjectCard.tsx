import styled, { css } from "styled-components";
import ImageSlider from "./ImageSlider";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { breakpoints } from "../styles/breakpoints";
import GitAndDeploy from "./GitAndDeploy";
import { useDarkMode } from "../contexts/DarkModeContext";
import { OverlayImageBox } from "../styles/GlobalStyles";

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
  position: relative;
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

const ProjectInfoBox = styled.div<StyledProjectCard>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-xl);

  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ $screenWidth }) =>
    $screenWidth <= breakpoints.mobileLargeBreakpoint
      ? css`
          padding: 0.3rem;
        `
      : css`
          padding: 1rem;
        `}
`;

const NameAndDescription = styled(OverlayImageBox)``;

function ProjectCard({ project }: ProjectCardProps) {
  const screenWidth = useScreenWidthRem();
  const { isDarkMode } = useDarkMode();

  return (
    <StyledProjectCard $screenWidth={screenWidth}>
      <ProjectInfoBox $screenWidth={screenWidth}>
        <NameAndDescription $screenWidth={screenWidth} $isDarkMode={isDarkMode}>
          <span>{project.title}</span>
        </NameAndDescription>
        <GitAndDeploy
          screenWidth={screenWidth}
          gitHubLink={project.gitHub}
          deployedLink={project.deploy}
          isDarkMode={isDarkMode}
        />
      </ProjectInfoBox>
      <ImageSlider images={project.previewImages} />
    </StyledProjectCard>
  );
}

export default ProjectCard;
