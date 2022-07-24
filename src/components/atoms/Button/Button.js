import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '8px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(66, 68, 90, 1);
  }
`;
