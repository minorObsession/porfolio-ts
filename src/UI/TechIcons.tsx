import { useRef, useState } from "react";
import styled from "styled-components";
import { allIcons } from "../config/icons";
import { Tooltip } from "../styles/GlobalStyles";
import Icon from "./Icon";

type TechIconsProps = {
  screenWidth: number;
  isDarkMode: boolean;
  iconsArray?: string[];
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
`;

const StyledTooltip = styled(Tooltip)``;

function TechIcons({ screenWidth, isDarkMode, iconsArray }: TechIconsProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<"left" | "right">(
    "left"
  );
  const iconRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (iconName: string, e: React.MouseEvent) => {
    setHoveredIcon(iconName);

    const iconElement = e.currentTarget as HTMLElement;
    const rect = iconElement.getBoundingClientRect();

    const distanceFromRight = window.innerWidth - rect.right;
    if (distanceFromRight < 80) {
      setTooltipPosition("right");
    } else {
      setTooltipPosition("left");
    }
  };
  // ! If iconsArray is provided as a string array, filter matching icons from allIcons
  const filteredIcons = iconsArray
    ? allIcons.filter((icon) => iconsArray.includes(icon.name))
    : allIcons;

  return (
    <IconsContainer>
      {filteredIcons.map((iconObject) => (
        <IconWrapper
          ref={iconRef}
          key={iconObject.id}
          onMouseEnter={(e) => handleMouseEnter(iconObject.name, e)}
          onMouseLeave={() => setHoveredIcon(null)}
          $isDarkMode={isDarkMode}
        >
          <Icon
            icon={iconObject.icon}
            color={iconObject.color}
            isIconGitHub={iconObject.name === "GitHub"}
          />

          {/* Tooltip */}
          {hoveredIcon === iconObject.name && (
            <StyledTooltip
              $isHoveringTechIcons={true}
              $screenWidth={screenWidth}
              $isDarkMode={isDarkMode}
              $position={tooltipPosition}
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
