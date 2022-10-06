import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tell:+234 811 922 3162">+234 811 922 3162</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="Mail to:godswillokenyi@gmail.com">godswillokenyi@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>innovating one program at time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/adexcel171">
      <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/godswill-okenyi-b9432323b">
      <AiFillLinkedin  size='3rem' />
    </SocialIcons>
    <SocialIcons href="https://instagram.com/admire_excellence?igshid=YmMyMTA2M2Y=">
      <AiFillInstagram size='3rem' />
    </SocialIcons>
    </SocialContainer>
     
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
