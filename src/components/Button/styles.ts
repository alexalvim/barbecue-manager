import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkestColor};
  border: none;
  color: ${({ theme }) => theme.colors.lightestColor};
  font-size: ${({ theme }) => theme.typo.small};
  border-radius: 2rem;
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.large}`};
  font-weight: bold;
  cursor: pointer;
`
