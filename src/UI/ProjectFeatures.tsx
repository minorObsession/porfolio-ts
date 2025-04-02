import styled, { css } from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { breakpoints } from "../styles/breakpoints";

const FeaturesContainer = styled.ul<{ $screenWidth: number }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding-left: 2rem; */
  width: 80%;
  gap: 0.8rem;
  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.tabletLandscapeBreakpoint &&
    css`
      gap: 1rem;
    `};
`;
const ProjectFeaturesHeading = styled(Heading)`
  grid-column: 1 / -1;

  text-decoration-thickness: 2px;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  grid-column: span 2;
  list-style-type: disc;
  padding-left: 0.5rem;
  line-height: 1.6;
`;

const FeatureTitle = styled.h4<{ $screenWidth: number }>`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  flex: 0 1 10%;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.tabletLandscapeBreakpoint &&
    css`
      font-size: 2rem;
    `}
`;

const FeatureDescription = styled.p<{ $screenWidth: number }>`
  font-size: 1.2rem;

  /* height: min-content; */
  flex: 0 1 10%;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.tabletLandscapeBreakpoint &&
    css`
      font-size: 1.5rem;
    `}
`;

type FeaturesProps = {
  features: Map<string, string>;
};

function ProjectFeatures({ features }: FeaturesProps) {
  const screenWidth = useScreenWidthRem();
  return (
    <FeaturesContainer $screenWidth={screenWidth}>
      <ProjectFeaturesHeading as="h3">Main features</ProjectFeaturesHeading>
      {[...features.entries()].map(([title, description]) => (
        <FeatureItem key={title}>
          <FeatureTitle $screenWidth={screenWidth}>{title}</FeatureTitle>
          {screenWidth > breakpoints.tabletLandscapeBreakpoint && (
            <FeatureDescription $screenWidth={screenWidth}>
              {description}
            </FeatureDescription>
          )}
        </FeatureItem>
      ))}
    </FeaturesContainer>
  );
}

export default ProjectFeatures;
