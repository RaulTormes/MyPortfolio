import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageProfile = styled(Image)`
  border-radius: 130px;
  max-width: fit-content;
  max-height: fit-content;
`;

export const Text = styled.p`
  align-items: center;
  font-weight: normal;
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${({ theme }) => theme.colors.$white};
`;
export const CvLink = styled.a`
  color: ${({ theme }) => theme.colors.$white};
  width: 170px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.$primary};
  text-decoration: none;
  border-radius: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
