import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id='project' >
  <SectionDivider/>
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
{projects.map((project) => (
   <BlogCard key={project.id}>
<img src={project.image} />
<TitleContent>
  <HeaderThree title>{project.title}</HeaderThree>
  <Hr />
</TitleContent>
<CardInfo>{project.description}</CardInfo>

<UtilityList>

<ExternalLinks href='' >code</ExternalLinks>
<ExternalLinks href='https://github.com/adexcel171/e-commerce-.git' >Source</ExternalLinks>

</UtilityList>
   </BlogCard> 
  
)
)}
  </GridContainer>
 </Section>
);

export default Projects;
