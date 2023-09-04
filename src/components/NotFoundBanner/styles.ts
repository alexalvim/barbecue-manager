import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spaces.largest}`};
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 200px;
    height: auto;
    margin-bottom: ${({ theme }) => theme.spaces.base};
  }

  h1 {
    color: ${({ theme }) => theme.colors.darkestColor};
    font-size: ${({ theme }) => theme.typo.large};
  }
`
