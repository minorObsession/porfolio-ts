import styled, { css } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { Heading } from "../styles/GlobalStyles";

// TODO:
// ! 'separate' semantically the 2 certificates
// ! add links to them

// const metaCertificates = [{}, {}];

const StyledCertificates = styled.section<{ $screenWidth: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      /* flex-direction: row; */
    `}
`;

const MetaBox = styled.div``;
const ChinguBox = styled.div``;

const MetaCert = styled.div``;
const ChinguCert = styled.div``;

type CertificatesProps = {
  screenWidth: number;
  id: string;
};

function Certificates({ screenWidth, id }: CertificatesProps) {
  const screenWiderThan620px =
    screenWidth > breakpoints.betweenMobAndTabBreakpoint;

  return (
    <>
      <StyledCertificates $screenWidth={screenWidth} id={id}>
        <Heading as="h1">Certifications</Heading>
        <MetaBox>
          <Heading as={screenWiderThan620px ? "h2" : "h3"}>
            Meta Front End Developer Certificate
          </Heading>
          <MetaCert></MetaCert>
        </MetaBox>
        <ChinguBox>
          <Heading as={screenWiderThan620px ? "h2" : "h3"}>
            Chingu Certificates
          </Heading>
          <ChinguCert></ChinguCert>
        </ChinguBox>
      </StyledCertificates>
    </>
  );
}

export default Certificates;
