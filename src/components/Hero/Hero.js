import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Raul Serrano
        </SectionTitle>
        <SectionText>
        Software Engineer
        </SectionText>
        <SocialIcons href="https://github.com/rachuism">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/raulserranomartin/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/superrachu/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </LeftSection>
    </Section>
  </>
);

export default Hero;