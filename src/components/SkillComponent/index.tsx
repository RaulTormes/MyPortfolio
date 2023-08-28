import React from "react";
import {
  Container,
  Level,
  LevelContainer,
  LevelIndicator,
  SKillContainer,
  TitleSkill,
} from "./styles";

interface SkillsProps {
  technology: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Skills = ({ technology, level = 1 }: SkillsProps) => {
  return (
    <Container>
      <TitleSkill>{technology}</TitleSkill>
      <SKillContainer>
        <LevelContainer>
          <LevelIndicator level={level} />
        </LevelContainer>
        <Level>{level}</Level>
      </SKillContainer>
    </Container>
  );
};
