import styled from "styled-components";

type IconProps = {
  icon: React.ElementType;
  color: string;
  isIconGitHub?: boolean;
};

const IconStyled = styled.span<{ $color: string; $isIconGitHub: boolean }>`
  svg {
    fill: ${({ $color, $isIconGitHub, theme }) =>
      $isIconGitHub ? `${theme.text}` : $color};
    width: 2rem;
    height: 2rem;
  }
`;

function Icon({ icon: Icon, color, isIconGitHub = false }: IconProps) {
  return (
    <IconStyled $color={color} $isIconGitHub={isIconGitHub}>
      <Icon />
    </IconStyled>
  );
}

export default Icon;
