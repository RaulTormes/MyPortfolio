import React from "react";
import { SectionComponent, TitleComponent } from "./styles";

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
    <SectionComponent
      height={height}
      gradient={gradient}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
    >
      <TitleComponent>{title}</TitleComponent>
      {children}
    </SectionComponent>
  );
};
