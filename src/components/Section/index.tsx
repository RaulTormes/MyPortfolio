import React from "react";
import { ContentComponent, SectionComponent, TitleComponent } from "./styles";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  height?: string;
  gradient?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export const Section = ({
  title,
  children,
  height,
  gradient,
  flexDirection,
  flexWrap,
}: SectionProps) => {
  return (
    <SectionComponent height={height} gradient={gradient}>
      <TitleComponent>{title}</TitleComponent>
      <ContentComponent flexDirection={flexDirection} flexWrap={flexWrap}>
        {children}
      </ContentComponent>
    </SectionComponent>
  );
};
