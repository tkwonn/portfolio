import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section id="acomplishments">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "50px" }}>
      Acomplishments
    </SectionTitle>
    <Boxes>
      <Box>
        [coming soon...]
      </Box>
      <Box>
        [coming soon...]
      </Box>
      <Box>
        [coming soon...]
      </Box>
      <Box>
        [coming soon...]
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
