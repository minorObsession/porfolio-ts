import styled, { css } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import FormRow from "./FormRow";
import { Heading } from "../styles/GlobalStyles";

type ContactMeProps = {
  isDarkMode: boolean;
  screenWidth: number;
  id: string;
};

const StyledContactMe = styled.footer<{
  $isDarkMode: boolean;
  $screenWidth: number;
}>`
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 1.5rem;

  ${({ $screenWidth }) =>
    $screenWidth >= breakpoints.betweenMobAndTabBreakpoint &&
    css`
      flex-direction: row;
      justify-content: space-around;
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
  grid-template-columns: 0.7fr 1.4fr;

  flex-grow: 1;

  padding: 1rem;

  /* flex-direction: column; */
  gap: 1rem 0;

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.smallMobileBreakpoint &&
    $screenWidth < breakpoints.mobileLargeBreakpoint &&
    css`
      grid-template-columns: 1fr 2.7fr;
    `}
  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    $screenWidth < breakpoints.betweenMobAndTabBreakpoint &&
    css`
      /* grid-template-columns: 1fr 2.7fr; */
    `}

  ${({ $screenWidth }) =>
    $screenWidth > breakpoints.mobileLargeBreakpoint &&
    css`
      /* justify-self: center !importants; */
      gap: 1.5rem 0.5rem;
      padding: 0 5rem;
    `}
`;

const SubmitBtn = styled.button`
  /* max-width: 70%; */
  justify-self: right;
  padding: 0.8rem 1.9rem;
`;

const StatusDiv = styled.div`
  justify-self: center;
  grid-column: 2;
`;

const Status = styled.p<{ isError: boolean }>`
  color: ${({ isError }) => (isError ? "red" : "green")};
`;

const ContactMeHeading = styled(Heading)<{ $isMessage?: boolean }>`
  white-space: nowrap;
  padding-right: 1rem;

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

function ContactMe({ isDarkMode, screenWidth, id }: ContactMeProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields");
      setIsError(true);
      return;
    }

    emailjs
      .sendForm(
        "gmail_js",
        "template_w4drmqo",
        e.target as HTMLFormElement,
        "7551KGxzY2t-xc_sc"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsError(false);
        },
        () => {
          setStatus("Error sending message. Please try again.");
          setIsError(true);
        }
      );
  };

  return (
    <StyledContactMe
      $screenWidth={screenWidth}
      $isDarkMode={isDarkMode}
      id={id}
    >
      <HeadingAndSidebarBox $screenWidth={screenWidth}>
        <ContactMeHeading $screenWidth={screenWidth} as="h2">
          Let's chat!
        </ContactMeHeading>
        <Sidebar inFooter={true} />
      </HeadingAndSidebarBox>
      <ContactForm $screenWidth={screenWidth} onSubmit={handleSubmit}>
        <FormRow
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormRow
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormRow
          label="Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <br />
        <SubmitBtn type="submit">Send Message</SubmitBtn>
        {status && (
          <StatusDiv>
            <Status isError={isError}>{status}</Status>
          </StatusDiv>
        )}
      </ContactForm>
    </StyledContactMe>
  );
}

export default ContactMe;
