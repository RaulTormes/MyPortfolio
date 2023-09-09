import React from "react";
import {
  Container,
  Level,
  LevelContainer,
  LevelIndicator,
  SKillContainer,
  TitleSkill,
} from "./styles";

interface SkillProps {
  technology: string;
  level: number;
}

export const Skill = ({ technology, level = 1 }: SkillProps) => {
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
