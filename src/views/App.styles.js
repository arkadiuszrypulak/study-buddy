import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Warning = styled.p`
  color: ${({ theme }) => theme.colors.error};
  background-color: white;
  padding: 2px 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
