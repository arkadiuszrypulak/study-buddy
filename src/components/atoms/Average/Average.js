import styled from 'styled-components';

export const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background-color: ${({ value, theme }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
