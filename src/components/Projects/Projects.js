import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, ProjectTitle, Tag, HashTag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/projects';
import { teamProjects } from '../../constants/teamProjects';
import { AiOutlineTags } from 'react-icons/ai';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText style={{ fontSize: "1.5rem", color: "#f3905bd5"}}>** Team Projects are highlighted **</SectionText>
    <GridContainer>
      {teamProjects.map(({ id, image, title, description, points, tags, hashtags, visit, source }) => (
        <BlogCard style={{ border: "2px solid #f49867", boxShadow: "3px 3px 10px #f3905bd5" }} key={id.toString()}>
          <Img src={image} />
          <TitleContent>
            <ProjectTitle title>{title}</ProjectTitle>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index.toString()}><AiOutlineTags /> {tag}</Tag>
              ))}
            </TagList>
            <TagList>
              {hashtags.map((ele, index) => (
                <HashTag key={index.toString()}># {ele}</HashTag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
      {projects.map(({ id, image, title, description, points, tags, visit, source }) => (
        <BlogCard key={id.toString()}>
          <Img src={image} />
          <TitleContent>
            <ProjectTitle title>{title}</ProjectTitle>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
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