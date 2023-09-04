import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`

export const StyledLinkButton = styled.button`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  text-decoration: underline;
`
