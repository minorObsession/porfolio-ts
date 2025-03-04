import styled, { css } from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { breakpoints } from "../styles/breakpoints";

const StyledExperience = styled.section`
  display: grid;

  /* // ! NEXT 2 LINES MAKE THE BORDER LOOK SICK */
  /* margin: 0 auto;
  max-width: 80%; */
  /* // ! ABOVE */

  row-gap: 3rem;
  align-items: center;
  justify-items: center;
`;

const ChinguContainer = styled.div<{ $screenWidth: number }>`
  display: grid;
  align-items: center;

  /* flex-direction: column; */
  /* gap: 0.5rem; */

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      /* // ! change layout ; */
      display: grid;
      grid-template-columns: 0.4fr 1fr;

      /* flex-direction: row; */
    `}
`;

const ChinguHeading = styled(Heading)<{ $screenWidth: number }>`
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      /* // ! change layout ; */
      grid-row: 1 / span 2;
      grid-column: 2;
      text-align: left;
      align-self: flex-start;
    `}
`;

const RoleAndDuration = styled.div<{ $screenWidth: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      flex-direction: row;
      gap: 1rem;
      /* flex-direction: column; */
    `}
`;

const ChinguDescription = styled.p<{ $screenWidth: number }>`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.3rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      /* // ! change layout ; */
      grid-row: 2;
      grid-column: 2;
      text-align: left;
      align-self: flex-start;

      font-size: 1.8rem;
    `}
`;

type ExperienceProps = { id: string; screenWidth: number };

function Experience({ id, screenWidth }: ExperienceProps) {
  const screenWiderThan620px =
    screenWidth > breakpoints.betweenMobAndTabBreakpoint;

  return (
    <StyledExperience id={id}>
      <Heading as="h1">Work Experience</Heading>
      <ChinguContainer $screenWidth={screenWidth}>
        <Heading as="h2">Chingu</Heading>
        <RoleAndDuration $screenWidth={screenWidth}>
          {/* // ! ADD CHINGU ICON */}

          <ChinguHeading
            as={screenWiderThan620px ? "h3" : "h4"}
            $screenWidth={screenWidth}
          >
            software developer {screenWiderThan620px && "→"}
          </ChinguHeading>
          <ChinguHeading
            as={screenWiderThan620px ? "h3" : "h4"}
            $screenWidth={screenWidth}
          >
            Jan 2024 - Jan 2025
          </ChinguHeading>
        </RoleAndDuration>
        <ChinguDescription $screenWidth={screenWidth}>
          Online volunteering collaborative program - developing apps in an
          Agile environment in a team of designers, developers, product managers
          and scrum masters
        </ChinguDescription>
      </ChinguContainer>
    </StyledExperience>
  );
}

export default Experience;
