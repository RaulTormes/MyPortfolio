import React from "react";
import { CardComponent, CardContainer, CardImage, LinkCard } from "./styles";

interface ProjectCardProps {
  imageSource: string;
  linkLabel?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  imageSource,
  linkLabel,
  onClick,
}: ProjectCardProps) => {
  return (
    <CardContainer>
      <CardComponent onClick={onClick}>
        <CardImage src={imageSource} alt="hey" width={277} height={197} />
      </CardComponent>
      <LinkCard href={linkLabel}>click here!</LinkCard>
    </CardContainer>
  );
};
