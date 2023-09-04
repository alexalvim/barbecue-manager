import styled from 'styled-components'

export const ContentWrapper = styled.section`
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkestColor};
  position: absolute;
  top: 0;
  left: 0;
`

export const ContentHolder = styled.div`
  padding: ${({ theme }) => theme.spaces.base};
  margin: 0 auto;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`

export const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
`
