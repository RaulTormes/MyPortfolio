import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const TopContent = styled(Container)`
  width: 100%;
  display: flex;
`;

export const BottomContent = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContent = styled.div`
  width: 50%;
`;
export const TechContent = styled.div`
  width: 50%;
`;

export const Title = styled.h2`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.$white};
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.$white};
`;

export const TechImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  border-radius: 20px;
`;
