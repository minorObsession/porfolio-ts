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

function Icon({ icon: Icon, color, isIconGitHub = false }: IconProps) {
  return (
    <StyledIcon $color={color} $isIconGitHub={isIconGitHub}>
      {typeof Icon === "function" && <Icon />}
      {typeof Icon === "string" && (
        <img src={Icon} style={{ width: "2.5rem" }} />
      )}
    </StyledIcon>
  );
}

export default Icon;
