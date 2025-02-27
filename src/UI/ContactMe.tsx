import styled, { css } from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { breakpoints } from "../styles/breakpoints";
import Sidebar from "./Sidebar";

type ContactMeProps = {
  isDarkMode: boolean;
  screenWidth: number;
};

const StyledContactMe = styled.footer<{
  $isDarkMode: boolean;
  $screenWidth: number;
}>`
  bottom: 0;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.betweenMobAndTabBreakpoint &&
    css`
      flex-direction: row;
      align-items: stretch;
    `}

  ${({ $isDarkMode }) =>
    $isDarkMode ? css`darkTheme.background` : css`lightTheme.background`}
`;

const HeadingAndSidebarBox = styled.div<{ $screenWidth: number }>`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ $screenWidth }) =>
    $screenWidth !== undefined &&
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      align-items: flex-end;
    `}
`;

const ContactForm = styled.form<{ $screenWidth: number }>`
  display: grid;
  align-items: center;
  grid-template-columns: 0.7fr 1fr;

  flex-grow: 1;

  padding: 1rem;

  /* flex-direction: column; */
  gap: 1rem 0;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallMobileBreakpoint &&
    $screenWidth < breakpoints.mobileLargeBreakpoint &&
    css`
      grid-template-columns: 1.3fr 2.7fr;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    $screenWidth < breakpoints.betweenMobAndTabBreakpoint &&
    css`
      grid-template-columns: 1fr 2.7fr;
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      gap: 1.5rem 0.5rem;
      padding: 0 2rem;
    `}
`;

const ContactMeHeading = styled(Heading)<{ $isMessage?: boolean }>`
  white-space: nowrap;

  ${({ $screenWidth }) =>
    $screenWidth !== undefined &&
    $screenWidth >= breakpoints.mobileLargeBreakpoint &&
    css`
      text-align: right;
    `}

  ${({ as }) =>
    as === "h4" &&
    css`
      text-align: right;
      margin-right: 1.5rem;
    `}

      ${({ $isMessage }) =>
    $isMessage &&
    css`
      align-self: flex-start;
      margin-top: 0.5rem;
    `}
`;

const FormInput = styled.input`
  line-height: 2em;
  padding: 0 1rem;
  text-align: start;

  border-radius: var(--border-radius-md);
`;

const FormMessageInput = styled.textarea`
  line-height: 3em;
  padding: 0 1rem;
  border-radius: var(--border-radius-md);
`;

function FormRow({ label }: { label: string }) {
  return (
    <>
      <ContactMeHeading $isMessage={label === "Message"} as="h4">
        {label}
      </ContactMeHeading>
      {label === "Message" ? <FormMessageInput /> : <FormInput />}
    </>
  );
}

function ContactMe({ isDarkMode, screenWidth }: ContactMeProps) {
  console.log(screenWidth);
  return (
    <StyledContactMe $screenWidth={screenWidth} $isDarkMode={isDarkMode}>
      <HeadingAndSidebarBox $screenWidth={screenWidth}>
        <ContactMeHeading $screenWidth={screenWidth} as="h2">
          Let's chat!
        </ContactMeHeading>
        <Sidebar inFooter={true} />
      </HeadingAndSidebarBox>
      <ContactForm $screenWidth={screenWidth}>
        <FormRow label="Name" />
        <FormRow label="Email" />
        <FormRow label="Message" />
      </ContactForm>
    </StyledContactMe>
  );
}

export default ContactMe;
