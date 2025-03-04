// function CertificatesList() {
//   const renderCertificates = (
//     title: string,
//     certificates: { name: string; url: string }[]
//   ) => (
//     <>
//       <Heading as={headingSize}>{title}</Heading>
//       <CertificateList>
//         {certificates.map((cert) => (
//           <li key={cert.name}>
//             <CertificateLink
//               href={cert.url}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {cert.name}
//             </CertificateLink>
//           </li>
//         ))}
//       </CertificateList>
//     </>
//   );

//   return (
//     <StyledCertificates $screenWidth={screenWidth} id={id}>
//       <Heading as="h1">Certifications</Heading>
//       {renderCertificates(
//         "Meta Front-End Developer Certificate",
//         metaCertificates
//       )}
//       {renderCertificates("Chingu Certificates", chinguCertificates)}
//     </StyledCertificates>
//   );
// }

// export default CertificatesList;
