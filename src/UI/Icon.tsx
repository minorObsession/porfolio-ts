import styled from "styled-components";

type IconProps = {
  icon: React.ElementType;
  color: string;
};

const IconStyled = styled.span<{ $color: string }>`
  svg {
    fill: ${({ $color }) => $color};
    width: 2rem;
    height: 2rem;
  }
`;

function Icon({ icon: Icon, color }: IconProps) {
  return (
    <IconStyled $color={color}>
      <Icon />
    </IconStyled>
  );
}

export default Icon;
