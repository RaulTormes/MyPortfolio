import styled from "styled-components";

export const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  width: 30vw;
`;

export const TitleSkill = styled.label`
  font-size: large;
  color: ${({ theme }) => theme.colors.$white};
`;

export const SKillContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LevelContainer = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  position: relative;
  border: 1px solid gray;
`;

export const LevelIndicator = styled.div<{ level: number }>`
  width: ${({ level }) => 20 * level}%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.$primary};
`;

export const Level = styled.p`
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.$white};
`;
