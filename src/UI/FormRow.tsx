import styled, { css } from "styled-components";
import { Heading } from "../styles/GlobalStyles";
import { breakpoints } from "../styles/breakpoints";

type FormRowProps = {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

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

function FormRow({ label, value, onChange }: FormRowProps) {
  return (
    <>
      <ContactMeHeading $isMessage={label === "Message"} as="h4">
        {label}
      </ContactMeHeading>
      {label === "Message" ? (
        <FormMessageInput name="message" value={value} onChange={onChange} />
      ) : (
        <FormInput
          name={label.toLowerCase()}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
}
export default FormRow;
