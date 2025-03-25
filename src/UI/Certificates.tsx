import styled, { css } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { Heading } from "../styles/GlobalStyles";
import chinguSVG from "../../public/chingu-icon.svg";
import { BsMeta } from "react-icons/bs";

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
  margin: 0 auto;

  ${({ $screenWidth }) => $screenWidth > breakpoints.tabletBreakpoint && css``}
`;

const CertificateList = styled.ul<{ $screenWidth: number }>`
  width: 90vw;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  /* padding: 1rem 4rem; */
  padding: 1rem 1rem 1rem 5rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 70vw;
      /* padding: 1rem 1rem 1rem 5rem; */
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletLandscapeBreakpoint &&
    css`
      width: 80vw;
      /* padding: 1rem 5rem; */
    `}
`;

const CertificateLink = styled.a<{ $screenWidth: number }>`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      /* // ! change layout */
      grid-row: 2;
      grid-column: 2;
      text-align: left;
      align-self: flex-start;

      font-size: 1.8rem;
    `}
`;

const CertTitleAndIcon = styled.div<{ $screenWidth: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* justify-content: space-between; */

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      gap: 2rem;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallDesktopBreakpoint &&
    css`
      gap: 3rem;
    `}
`;

const CertificateIcon = styled.img<{ $screenWidth: number }>`
  justify-self: end;
  width: 3rem;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      width: 3.5rem;
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 4rem;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallDesktopBreakpoint &&
    css`
      width: 5rem;
    `}
`;

const StyledCertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  width: 100%;

  margin-top: 2rem;
`;

const CertTitle = styled(Heading)<{ $screenWidth: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
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
    certificates: { name: string; url: string }[],
    iconImg?: string
  ) => (
    <StyledCertContainer>
      <CertTitleAndIcon $screenWidth={screenWidth}>
        {iconImg ? (
          <CertificateIcon src={iconImg} $screenWidth={screenWidth} />
        ) : (
          <BsMeta size="4rem" fill="#0082fb" />
        )}
        <CertTitle $screenWidth={screenWidth} as={headingSize}>
          {title}
        </CertTitle>
      </CertTitleAndIcon>

      <CertificateList $screenWidth={screenWidth}>
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
    </StyledCertContainer>
  );

  return (
    <StyledCertificates $screenWidth={screenWidth} id={id}>
      <Heading as="h1">Certifications</Heading>
      {renderCertificates(
        "Meta Front-End Developer Certificate",
        metaCertificates
      )}
      {renderCertificates("Chingu Certificates", chinguCertificates, chinguSVG)}
    </StyledCertificates>
  );
}

export default Certificates;
