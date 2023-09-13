//

import { Section } from "~/components/Section";
import { Skill } from "~/components/SkillComponent";
import data from "~/data/skills.json";
import { Container } from "./styles";
import { theme } from "~/styles/defaultTheme";

export const Skills = () => {
  const skillData = data.skills;
  return (
    <Section title="<Skills>" gradient={theme.colors.$reverseGradient}>
      <Container>
        {skillData.map((item, index) => (
          <Skill technology={item.technology} level={item.level} key={index} />
        ))}
      </Container>
    </Section>
  );
};
