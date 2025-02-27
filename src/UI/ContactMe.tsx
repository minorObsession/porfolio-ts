import styled, { css } from "styled-components";
import { darkTheme, Heading, lightTheme } from "../styles/GlobalStyles";
import { breakpoints } from "../styles/breakpoints";

type ContactMeProps = {
  isDarkMode: boolean;
  screenWidth: number;
};

const StyledContactMe = styled.footer<{
  $isDarkMode: boolean;
  $screenWidth: number;
}>`
  /* height: 20rem; */

  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? darkTheme.background : lightTheme.background};
  /* position: fixed; */
  bottom: 0;

  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      flex-direction: row;
    `}
`;

const ContactForm = styled.form<{ $screenWidth: number }>`
  display: grid;
  gap: 2rem 0.5rem;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 1rem 0;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.mobileLargeBreakpoint && css``}
`;

const ContactMeHeading = styled(Heading)`
  white-space: nowrap;
  align-self: center;

  ${({ $screenWidth }) =>
    $screenWidth !== undefined &&
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      justify-self: ${({ as }) => (as === "h4" ? "flex-end" : "center")};
      align-self: ${({ as }) => (as === "h2" ? "flex-start" : "center")};
    `}
`;

const FormInput = styled.input<{ $messageInput?: boolean }>`
  line-height: 2.5rem;
  padding: 0 1rem;

  border-radius: var(--border-radius-xl);

  ${($messageInput) =>
    $messageInput &&
    css`
      /* height: ; */
    `}
`;

function FormRow({ label }: { label: string }) {
  return (
    <>
      <ContactMeHeading as="h4">{label}</ContactMeHeading>
      <FormInput $messageInput={label === "Message"} />
    </>
  );
}

function ContactMe({ isDarkMode, screenWidth }: ContactMeProps) {
  return (
    <StyledContactMe $screenWidth={screenWidth} $isDarkMode={isDarkMode}>
      <ContactMeHeading $screenWidth={screenWidth} as="h2">
        Get in touch
      </ContactMeHeading>
      <ContactForm $screenWidth={screenWidth}>
        <FormRow label="Name" />
        <FormRow label="Email" />
        <FormRow label="Message" />
      </ContactForm>
    </StyledContactMe>
  );
}

export default ContactMe;
