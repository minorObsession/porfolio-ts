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
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;

  ${({ $screenWidth }) => $screenWidth > breakpoints.tabletBreakpoint && css``}
`;

const CertificateList = styled.ul<{ $screenWidth: number; $chingu?: boolean }>`
  width: 85%;
  display: grid;
  gap: 0.5rem;

  grid-template-columns: 1fr;
  list-style-position: inside;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      padding-left: 10%;
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.betweenMobAndTabBreakpoint &&
    css`
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      gap: 1rem;
      padding-left: 8%;
      max-width: 100%;
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletLandscapeBreakpoint && css``}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallDesktopBreakpoint &&
    css`
      padding-left: 15%;
    `}


  li {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
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

const StyledCertContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 3rem;
  width: 100%;

  margin-top: 2rem;
`;
// ! TITLE TO BREAK LINES ON LARGE SCREENS
const CertTitleAndIcon = styled.div<{ $screenWidth: number }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 90%;

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

const CertTitle = styled(Heading)<{ $screenWidth: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  flex-basis: 100%;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
const CertificateIcon = styled.img<{ $screenWidth: number }>`
  justify-self: end;
  width: 4rem;

  /* flex-basis: ; */
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      /* width: 3.5rem; */
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.tabletBreakpoint &&
    css`
      width: 4rem;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallDesktopBreakpoint &&
    css`
      width: 4.5rem;
    `}
`;
// Component Props
type CertificatesProps = {
  screenWidth: number;
  id: string;
};

function Certificates({ screenWidth, id }: CertificatesProps) {
  const screenWiderThan768px = screenWidth > breakpoints.tabletBreakpoint;
  const headingSize = screenWiderThan768px ? "h2" : "h3";

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

      <CertificateList $chingu={true} $screenWidth={screenWidth}>
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
      {renderCertificates(
        "Chingu Collaborative Voyage Certificates",
        chinguCertificates,
        chinguSVG
      )}
    </StyledCertificates>
  );
}

export default Certificates;
