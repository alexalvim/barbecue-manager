import styled from 'styled-components'

export const LoadingMessage = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  padding: ${({ theme }) => theme.spaces.base};
  width: 100%;
  margin: 0 auto;
  display: block;

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  flex-grow: 1;
`

export const ContentHolder = styled.div`
  padding: ${({ theme }) => `0 ${theme.spaces.base} ${theme.spaces.large}`};
  margin: 0 auto;
  width: 100%;
  transform: translateY(-60px);

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`

export const BarbecuesList = styled.ul`
  display: block;

  > li {
    margin-bottom: ${({ theme }) => theme.spaces.base};

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spaces.base};
    row-gap: ${({ theme }) => theme.spaces.base};

    > li {
      margin-bottom: 0;
    }
  }
`
