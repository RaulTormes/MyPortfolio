import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LeftContent = styled(Container)`
  padding-left: 5%;
  flex: 1;
`;
export const RightContent = styled(Container)`
  width: auto;
  min-width: 30%;
  gap: 48px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.$white};
  font-family: sans-serif;
  font-size: 68px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.$primary};
  font-family: sans-serif;
  font-size: 68px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.$white};
  font-family: sans-serif;
  font-size: 22px;
  font-weight: lighter;
  padding-top: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 336px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageContent = styled(Image)`
  width: 300px;
  height: 311px;
  position: absolute;
  border-radius: 10px;
  z-index: 3;
  box-shadow: 10px -7px 8px -2px rgba(0, 0, 0, 0.301);
`;
export const CardWhite = styled.div`
  width: 300px;
  height: 311px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.$white};
  border-radius: 10px;
  z-index: 2;
  transform: translate(25px, -25px);
  box-shadow: 10px -5px 8px -2px rgba(0, 0, 0, 0.25);
`;
export const CardGreen = styled.div`
  width: 300px;
  height: 311px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.$primary};
  border-radius: 10px;
  transform: translate(50px, -50px);
  box-shadow: 10px -5px 8px -2px rgba(0, 0, 0, 0.25);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 100%;
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 33px;
  box-shadow: 5px -3px 5px -2px rgba(0, 0, 0, 0.25);
`;
