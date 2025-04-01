import styled, { css } from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { breakpoints } from "../styles/breakpoints";

const StyledExperience = styled.section`
  display: grid;

  row-gap: 3rem;
  align-items: center;
  justify-items: center;
`;

const ChinguContainer = styled.div<{ $screenWidth: number }>`
  display: grid;
  column-gap: 2rem;
  align-items: center;

  /* flex-direction: column; */
  /* gap: 0.5rem; */

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      /* // ! change layout ; */
      display: grid;
      grid-template-columns: 0.4fr 1fr;

      /* flex-direction: row; */
    `}
`;

const ChinguHeading = styled(Heading)<{ $screenWidth: number }>`
  /* line-height: 0.5; */

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
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
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
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
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      /* // ! change layout ; */
      grid-row: 2;
      grid-column: 2;
      text-align: left;
      align-self: flex-start;

      font-size: 1.5rem;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      font-size: 2rem;
    `}
`;
const RoleBox = styled.div<{ $screenWidth: number }>`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  grid-row: span 2;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      align-self: center;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      align-self: flex-start;
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
        <RoleBox $screenWidth={screenWidth}>
          <Heading as="h2">Chingu</Heading>
          <Heading style={{ fontStyle: "italic", lineHeight: "1.2" }} as="h3">
            software developer
          </Heading>
        </RoleBox>
        <RoleAndDuration $screenWidth={screenWidth}>
          <ChinguHeading
            as={screenWiderThan620px ? "h2" : "h3"}
            $screenWidth={screenWidth}
          >
            Jan 2024 - present
          </ChinguHeading>
        </RoleAndDuration>
        <ChinguDescription $screenWidth={screenWidth}>
          Creating applications within an Agile framework, working closely with
          designers, other developers, product managers and scrum masters to
          deliver successful and appealing solutions
        </ChinguDescription>
      </ChinguContainer>
    </StyledExperience>
  );
}

export default Experience;
