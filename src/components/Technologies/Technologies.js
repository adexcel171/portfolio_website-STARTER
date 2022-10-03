import React from 'react';
import { DiBootstrap, DiReact, DiPhotoshop, DiPhonegap } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <br/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>i have worked with a range of technologies in the web development world</SectionText>
<List>
  <ListItem>
  <DiBootstrap size='3rem'/>
  <ListContainer>
    <ListTitle>Front-End</ListTitle>
    <ListParagraph>Experience with <br/> React.js</ListParagraph>
  </ListContainer>
  </ListItem>
  <ListItem>
  <DiReact size='3rem'/>
  <ListContainer>
    <ListTitle>Back-End</ListTitle>
    <ListParagraph>Experience with <br/> Next.js</ListParagraph>
  </ListContainer>
  </ListItem>
  <ListItem>
  <DiPhotoshop size='3rem'/>
  <ListContainer>
    <ListTitle>Ui/UX</ListTitle>
    <ListParagraph>Experience with <br/>Adobe</ListParagraph>
  </ListContainer>
  </ListItem>
</List>
 </Section>
);

export default Technologies;
