import React from "react";
import { SectionComponent, TitleComponent } from "./styles";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  height?: string;
  gradient?: string;
}

export const Section = ({
  title,
  children,
  height,
  gradient,
}: SectionProps) => {
  return (
    <SectionComponent height={height} gradient={gradient}>
      <TitleComponent>{title}</TitleComponent>
      {children}
    </SectionComponent>
  );
};
