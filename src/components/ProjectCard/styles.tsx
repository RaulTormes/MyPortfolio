import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 1270px;
  height: 300px;
  gap: 15px;
`;

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.$white};
  width: 486px;
  height: 266px;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
`;
