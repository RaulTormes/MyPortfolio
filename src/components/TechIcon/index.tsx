import React from "react";
import { ImageContainer, TechImage } from "./styles";

interface TechIconProps {
  image: string;
}

export const TechIcon = ({ image }: TechIconProps) => {
  return (
    <ImageContainer>
      <TechImage src={image} alt="icons" />
    </ImageContainer>
  );
};
