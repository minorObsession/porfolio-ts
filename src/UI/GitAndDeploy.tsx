import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

import {
  darkTheme,
  lightTheme,
  OverlayImageBox,
  Tooltip,
} from "../styles/GlobalStyles";

type GitAndDeployProps = {
  gitHubLink: string;
  deployedLink: string;
  isDarkMode: boolean;
  screenWidth: number;
};

type HoverIconProps = {
  icon: IconType;
  text: string;
  link: string;
  size?: number; // Make size optional with a default value
  isDarkMode: boolean;
  screenWidth: number;
};

const StyledGitAndDeploy = styled(OverlayImageBox)``;

const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const StyledTooltip = styled(Tooltip)``;

const HoverIcon = ({
  icon: Icon,
  text,
  link,
  isDarkMode,
  screenWidth,
  size = 20,
}: HoverIconProps) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setIsHovered(false);
        }, 150)
      }
    >
      <Icon
        stroke={isDarkMode ? darkTheme.text : lightTheme.text}
        fill={isDarkMode ? darkTheme.text : lightTheme.text}
        size={size}
      />
      {isHovered && (
        <StyledTooltip $screenWidth={screenWidth} $isDarkMode={isDarkMode}>
          {text}
        </StyledTooltip>
      )}
    </a>
  );
};

const GitAndDeploy = ({
  gitHubLink,
  deployedLink,
  isDarkMode,
  screenWidth,
}: GitAndDeployProps) => {
  return (
    <StyledGitAndDeploy $screenWidth={screenWidth} $isDarkMode={isDarkMode}>
      <Wrapper>
        <HoverIcon
          screenWidth={screenWidth}
          isDarkMode={isDarkMode}
          icon={FaGithub}
          text="GitHub Repository"
          link={gitHubLink}
        />
      </Wrapper>
      <Wrapper>
        <HoverIcon
          screenWidth={screenWidth}
          isDarkMode={isDarkMode}
          icon={MdWeb}
          text="Deployed Website"
          link={deployedLink}
        />
      </Wrapper>
    </StyledGitAndDeploy>
  );
};

export default GitAndDeploy;
