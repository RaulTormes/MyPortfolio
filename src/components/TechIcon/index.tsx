import React from "react";
import { ImageContainer, TechImage } from "./styles";

interface TechIconProps {
  image: any;
}

export const TechIcon = ({ image }: TechIconProps) => {
  return (
    <ImageContainer>
      <TechImage src={image} />
    </ImageContainer>
  );
};
