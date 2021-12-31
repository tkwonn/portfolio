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
      <Button onClick={() => window.open('mailto: kwontaesok1997@gmail.com')}>Email</Button>
      <Button>
        <a href='/images/tk.resume.pdf' download='taesok_kwon_resume.pdf' style={{color: 'white'}}>
          Download resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;