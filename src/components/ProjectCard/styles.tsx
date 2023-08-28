import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #000000;
  padding: 5px;
  width: 320px;
  height: 200px;
  gap: 15px;
`;

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #aaa;
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.img``;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
`;
