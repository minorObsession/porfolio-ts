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
  icon: React.ElementType;
  color: string;
  isIconGitHub?: boolean;
};

function Icon({ icon: Icon, color, isIconGitHub = false }: IconProps) {
  return (
    <StyledIcon $color={color} $isIconGitHub={isIconGitHub}>
      <Icon />
    </StyledIcon>
  );
}

export default Icon;
