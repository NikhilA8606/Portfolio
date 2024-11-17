import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Nikhila
        </SectionTitle>
        <SectionText>
          Here, you'll find a showcase of my projects, skills, and experiences,
          reflecting my journey in tech and continuous growth as a developer."
        </SectionText>
        <a
          href="https://drive.google.com/file/d/1TJlAOeqDXXD_RYYRFb_CO4X3UqTclAjG/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
