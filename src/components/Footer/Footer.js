
import React from "react"
import styled from "styled-components"
import { COLOR_HIGHLIGHT, COLOR_GREY } from '../../style/colorVariables'
import { FONT_GROUP_MAIN_TEXT } from '../../style/fonts/fontVariables'
import longLogo from "../../images/decipher-logo-long.png"
import github from "../../images/icons/github.svg"
import twitter from "../../images/icons/twitter.svg"

import linkedin from "../../images/icons/linkedin.svg"

const Wrapper = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: 0.5vw;
  display: flex;
  flex-direction: row;
  color: ${COLOR_GREY};
  font-size: 11px;
  align-items: center;
  flex: 0 0 32px;
`;

const LongLogo = styled.a`
  flex: 0 1 auto;
  text-align: left;
  padding: 0 8px;
  transition: all 0.2s ease;
  opacity: 0.8;
  filter: grayscale(100%);
  &:hover {
    opacity: 1;
    transition: all 0.2s ease;
    filter: grayscale(0%);
  }
  img {
    max-width: 157px;
  }
`;

const Copyright = styled.p`
  margin: 0;
  text-transform: uppercase;
  flex: 1 1 100%;
  letter-spacing: 0.03em;
  text-align: center;
  transition: opacity 0.2s ease;
  cursor: default;
  font-family: ${FONT_GROUP_MAIN_TEXT};
  z-index: -1;
  opacity: 0;
  @media all and (min-width: 800px) {
    opacity: 0.8;
    z-index: 1;
  }
`;

const Links = styled.div`
  flex: 0 0 auto;
  text-align: right;
  padding: 0 0 0 8px;
`;

const Link = styled.a`
  padding: 0 8px;
`;

const Social = styled.img`
  width: 16px;
  opacity: 0.4;
  transition: opacity 0.2s ease;
  &:hover{
    opacity: 0.8;
  }
`

/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
export default function Footer() {
  return (
    <Wrapper>
      <LongLogo
        href="http://deciphernow.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="Decipher Technology Studios" src={longLogo} />
      </LongLogo>
      <Copyright>&copy;2017 Decipher Technology Studios</Copyright>
      <Links>
        <Link
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
        >
        <Social alt="GitHub"  src={github} />
        </Link>
        <Link
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
        >
        <Social alt="Twitter" src={twitter} />
        </Link>
        <Link
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
        >
        <Social alt="LinkedIn" src={linkedin} />
        </Link>
      </Links>
    </Wrapper>
  );
}