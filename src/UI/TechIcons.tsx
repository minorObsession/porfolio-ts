import { useState } from "react";
import styled from "styled-components";
import { allIcons } from "../config/icons";
import { darkTheme, lightTheme, Tooltip } from "../styles/GlobalStyles";
import Icon from "./Icon";

type TechIconsProps = {
  screenWidth: number;
  isDarkMode: boolean;
};

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  flex-grow: 0;

  padding: 0 2rem;
`;

const IconWrapper = styled.span<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;
  transform: scale(1.5);
  position: relative;

  /* background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? darkTheme.background : lightTheme.background}; */
`;

const StyledTooltip = styled(Tooltip)``;

function TechIcons({ screenWidth, isDarkMode }: TechIconsProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <IconsContainer>
      {allIcons.map((iconObject) => (
        <IconWrapper
          key={iconObject.id}
          onMouseEnter={() => setHoveredIcon(iconObject.name)}
          onMouseLeave={() => setHoveredIcon(null)}
          $isDarkMode={isDarkMode}
        >
          <Icon
            icon={iconObject.icon}
            color={iconObject.color}
            isIconGitHub={iconObject.name === "GitHub"}
          />
          {/* // ! Tooltip */}

          {hoveredIcon === iconObject.name && (
            <StyledTooltip
              $isHoveringTechIcons={true}
              $screenWidth={screenWidth}
              $isDarkMode={isDarkMode}
            >
              {iconObject.name}
            </StyledTooltip>
          )}
        </IconWrapper>
      ))}
    </IconsContainer>
  );
}

export default TechIcons;
