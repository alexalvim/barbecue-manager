import styled from 'styled-components'

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 192px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 48rem) {
    width: 282px;
  }
`

export const IconHolder = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    fill: ${({ theme }) => theme.colors.darkestColor};
    opacity: 40%;
    height: 44px;
    width: 40px;
  }
`

export const BoxText = styled.div`
  color: ${({ theme }) => theme.colors.darkestColor};
  margin-top: ${({ theme }) => theme.spaces.base};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: bold;
`
