import styled from 'styled-components'

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  height: 192px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces.large} ${theme.spaces.largest}`};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.colors.defaultBoxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 48rem) {
    width: 282px;
  }
`

export const EventDate = styled.h4`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.medium};
  margin-bottom: ${({ theme }) => theme.spaces.medium};
`

export const EventTitle = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typo.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
`

export const TopicHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TopicInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.mainColor};
    width: 20px;
    height: 20px;
    margin-right: ${({ theme }) => theme.spaces.tiny};
  }
`
