import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    "I've worked on various data analysis and frontend web development projects,
     utilizing a range of technologies in both fields."

    </SectionText>
    <List>
      <ListItem>
        <picture>
        <DiFirebase size="3rem" />
          
        </picture>
        <ListContainer>
          <ListTitle>Data Analysis</ListTitle>
          <ListParagraph>
            Experiece with <br />
            PowerBi, SQL, Excel, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python Libraries
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
