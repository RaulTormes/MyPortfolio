import Image from "next/image";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  width: 320px;
  height: 200px;
  gap: 15px;
`;

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.$white};
  width: 100%;
  height: 100%;
`;

export const CardImage = styled(Image)`
  width: 320px;
  height: 200px;
`;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
`;
