import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:541-868-6997">541-868-6997</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kwontaesok1997@gmail.com">kwontaesok1997@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer style={{ display: "flex", justifyContent: "flex-end"}}>
        <SocialContainer>
          <SocialIcons href="https://github.com/tkwonn">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
