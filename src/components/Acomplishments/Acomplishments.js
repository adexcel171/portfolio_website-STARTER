import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Open Source Projects'},
  { number: 1000, text: 'Projects', },
  { number: 20, text: 'Github Followers', },
  { number: 100, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
      <Box key={index}>
<BoxNum>{card.number}+</BoxNum>
<BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;
