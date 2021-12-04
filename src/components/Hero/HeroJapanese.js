import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Taesok Kwon's <br />
        Personal Portfolio
      </SectionTitle>
      <Button onClick={() => window.open('mailto: kwontaesok1997@gmail.com')}>Email</Button>
      <Button>
        <a href='/images/tk.resume-ja.pdf' download='Taesok Kwon Resume.pdf' style={{color: 'white'}}>
          Download resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;