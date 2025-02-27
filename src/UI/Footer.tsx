import styled from "styled-components";

const StyledFooter = styled.footer``;

function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} Bogdan Terzic. All rights reserved.
      </p>
      <div>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="w-6 h-6 inline"
          />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="w-6 h-6 inline"
          />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
