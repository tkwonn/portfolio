import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, ProjectTitle, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/projectsJapanese';
import { AiOutlineTags } from 'react-icons/ai';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description,points, tags, visit, source }) => (
        <BlogCard key={id.toString()}>
          <Img src={image} />
          <TitleContent>
            <ProjectTitle title>{title}</ProjectTitle>
          </TitleContent>
          <CardInfo><span style={{ color:'skyblue'}}>概要：</span>{description}</CardInfo>
          <CardInfo><span style={{ color:'skyblue'}}>工夫した点：</span>{points}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index.toString()}><AiOutlineTags /> {tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;