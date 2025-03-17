import styled from "styled-components";
import { Heading } from "../styles/GlobalStyles";

const FeaturesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  padding-left: 2rem;
`;

const FeatureItem = styled.li`
  list-style-type: disc; /* Ensures bullet points */
  padding-left: 0.5rem;
  line-height: 1.6;
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  flex: 0 1 10%;
`;

const FeatureDescription = styled.p`
  font-size: 1.3rem;

  /* height: min-content; */
  flex: 0 1 10%;
`;

const ProjectFeaturesHeading = styled(Heading)`
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  margin-bottom: 1.5rem;
`;

type FeaturesProps = {
  features: Map<string, string>;
};

function ProjectFeatures({ features }: FeaturesProps) {
  return (
    <FeaturesContainer>
      <ProjectFeaturesHeading as="h3">Main features</ProjectFeaturesHeading>
      {[...features.entries()].map(([title, description]) => (
        <FeatureItem key={title}>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDescription>{description}</FeatureDescription>
        </FeatureItem>
      ))}
    </FeaturesContainer>
  );
}

export default ProjectFeatures;
