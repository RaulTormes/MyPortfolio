import styled from "styled-components";

interface SectioncProps {
  height?: string;
  gradient?: string;
}

interface ContentProps {
  flexDirection?: string;
  flexWrap?: string;
}

export const SectionComponent = styled.section<SectioncProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${({ height }) => height || "100vh"};
  padding: 24px 66px;
  background: ${({ gradient, theme }) =>
    gradient || theme.colors.$gradientDefault};
`;
export const TitleComponent = styled.h1`
  color: ${({ theme }) => theme.colors.$white};
`;

export const ContentComponent = styled.div<ContentProps>`
  flex: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  flex-flow: ${({ flexWrap }) => flexWrap};
  flex-wrap: wrap;
`;
