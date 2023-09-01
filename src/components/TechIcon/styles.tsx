import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.$white};
  height: 70px;
  width: 70px;
`;

export const TechImage = styled(Image)`
  height: 70px;
  width: 70px;
`;
