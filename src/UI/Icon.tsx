import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span<{ $color: string; $isIconGitHub: boolean }>`
  svg {
    fill: ${({ $color, $isIconGitHub, theme }) =>
      $isIconGitHub ? `${theme.text}` : $color};
    width: 2rem;
    height: 2rem;
  }
`;

type IconProps = {
  icon: React.ElementType | string;
  color: string;
  isIconGitHub?: boolean;
};

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ icon: IconElement, color, isIconGitHub = false }, ref) => {
    return (
      <StyledIcon ref={ref} $color={color} $isIconGitHub={isIconGitHub}>
        {typeof IconElement === "function" && <IconElement />}
        {typeof IconElement === "string" && (
          <img src={IconElement} style={{ width: "2.5rem" }} />
        )}
      </StyledIcon>
    );
  }
);

export default Icon;
