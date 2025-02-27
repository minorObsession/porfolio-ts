import styled, { css } from "styled-components";
import ImageSlider from "./ImageSlider";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { breakpoints } from "../styles/breakpoints";
import GitAndDeploy from "./GitAndDeploy";
import { useDarkMode } from "../contexts/DarkModeContext";
import { OverlayImageBox } from "../styles/GlobalStyles";
import { useState } from "react";

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
  $isCardHovered?: boolean;
};

// ! max-height to prevent layout shifts
// ! min-height to spread element full height
const StyledProjectCard = styled.article<StyledProjectCard>`
  position: relative;
  border-radius: var(--border-radius-md);
  z-index: 20;

  ${({ $screenWidth }) =>
    $screenWidth <= breakpoints.mobileLargeBreakpoint
      ? css`
          max-height: 25rem;
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
  padding: 0.3rem;

  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      padding: 1rem;
    `}

  opacity: ${({ $isCardHovered }) => ($isCardHovered ? "1" : "0")};
  pointer-events: ${({ $isCardHovered }) => ($isCardHovered ? "auto" : "none")};
  transition: opacity 0.7s ease-in-out;
`;

const NameAndDescription = styled(OverlayImageBox)``;

function ProjectCard({ project }: ProjectCardProps) {
  // ! PASS THESE 2 WITH PROPS!!!
  const screenWidth = useScreenWidthRem();
  const { isDarkMode } = useDarkMode();

  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <StyledProjectCard
      onClick={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      $screenWidth={screenWidth}
    >
      <ProjectInfoBox $isCardHovered={isCardHovered} $screenWidth={screenWidth}>
        <NameAndDescription
          $isCardHovered={isCardHovered}
          $screenWidth={screenWidth}
          $isDarkMode={isDarkMode}
        >
          <span>{project.title}</span>
        </NameAndDescription>
        <GitAndDeploy
          screenWidth={screenWidth}
          gitHubLink={project.gitHub}
          deployedLink={project.deploy}
          isDarkMode={isDarkMode}
        />
      </ProjectInfoBox>
      <ImageSlider
        images={project.previewImages}
        isCardHovered={isCardHovered}
        setIsCardHovered={setIsCardHovered}
      />
    </StyledProjectCard>
  );
}

export default ProjectCard;
