import styled from "styled-components";

interface SectioncProps {
  height?: string;
  gradient?: string;
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
  font-size: large;
  color: ${({ theme }) => theme.colors.$white};
`;
