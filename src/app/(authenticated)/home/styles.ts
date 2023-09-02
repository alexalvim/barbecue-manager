import styled from 'styled-components'

export const LoadingMessage = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  padding: 0 ${({ theme }) => theme.spaces.base};
  width: 100%;

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`

export const ContentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spaces.base};
  margin: 0 auto;
  width: 100%;
  transform: translateY(-60px);

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`
