import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  height: 70px;
  width: 70px;
`;

export const TechImage = styled(Image).attrs(() => ({
  width: 70,
  height: 70,
}))`
  height: 70px;
  width: 70px;
  border-radius: 10px;
`;
