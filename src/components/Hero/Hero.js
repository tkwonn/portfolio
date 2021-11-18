import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Taesok Kwon's <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my personal portfolio.
      </SectionText>
      <Button onClick={() => window.location = ''}>Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;