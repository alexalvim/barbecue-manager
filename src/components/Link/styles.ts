import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: bold;
  cursor: pointer;
`
