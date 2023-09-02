import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlayGray};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  padding: ${({ theme }) => theme.spaces.large};
  width: 100%;
  min-height: 100%;
  overflow: auto;
  height: 100%;

  @media (min-width: 48rem) {
    border-radius: 4px;
    min-height: 0;
    max-width: 28rem;
    max-height: 35rem;
  }
`
