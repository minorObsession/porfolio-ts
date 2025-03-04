import styled, { css } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { Heading } from "../styles/GlobalStyles";

const metaCertificates = [
  {
    name: "Introduction to Front-End Development",
    url: "https://www.coursera.org/account/accomplishments/verify/DSP6247NC6SW",
  },
  {
    name: "Programming with JavaScript",
    url: "https://www.coursera.org/account/accomplishments/records/MLO6GVZWLK0G",
  },
  {
    name: "Version Control",
    url: "https://www.coursera.org/account/accomplishments/records/3SGI2ULVBISD",
  },
  {
    name: "HTML and CSS in depth",
    url: "https://www.coursera.org/account/accomplishments/records/62TSTFDCMPF4",
  },
  {
    name: "React Basics",
    url: "https://www.coursera.org/account/accomplishments/records/2YHZ16TLZXPX",
  },
  {
    name: "Advanced React",
    url: "https://www.coursera.org/account/accomplishments/records/XLFK9PDOFGCV",
  },
  {
    name: "Principles of UX/UI Design",
    url: "https://www.coursera.org/account/accomplishments/records/OQDBDKK66YXZ",
  },
  {
    name: "Front-End Developer Capstone",
    url: "https://www.coursera.org/account/accomplishments/records/EKGBES5F468E",
  },
];

const chinguCertificates = [
  {
    name: "Voyage 52 Certificate",
    url: "https://drive.google.com/file/d/1QCf_6ZIIVQzs-6hs6KHg8czqIOjC4Ajg/view?usp=sharing",
  },
  {
    name: "Voyage 53 Certificate",
    url: "https://drive.google.com/file/d/11ad6ds4GyplsjOQe40b_RvzwXBE33ohl/view?usp=sharing",
  },
];

const StyledCertificates = styled.section<{ $screenWidth: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CertificateList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem 3rem;
`;

const CertificateLink = styled.a<{ $screenWidth: number }>`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;

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

// Component Props
type CertificatesProps = {
  screenWidth: number;
  id: string;
};

function Certificates({ screenWidth, id }: CertificatesProps) {
  const screenWiderThan620px =
    screenWidth > breakpoints.betweenMobAndTabBreakpoint;
  const headingSize = screenWiderThan620px ? "h2" : "h3";

  const renderCertificates = (
    title: string,
    certificates: { name: string; url: string }[]
  ) => (
    <>
      <Heading as={headingSize}>{title}</Heading>
      <CertificateList>
        {certificates.map((cert) => (
          <li key={cert.name}>
            <CertificateLink
              $screenWidth={screenWidth}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cert.name}
            </CertificateLink>
          </li>
        ))}
      </CertificateList>
    </>
  );

  return (
    <StyledCertificates $screenWidth={screenWidth} id={id}>
      <Heading as="h1">Certifications</Heading>
      {renderCertificates(
        "Meta Front-End Developer Certificate",
        metaCertificates
      )}
      {renderCertificates("Chingu Certificates", chinguCertificates)}
    </StyledCertificates>
  );
}

export default Certificates;
