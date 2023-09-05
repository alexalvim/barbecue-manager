import Link from 'next/link'
import styled from 'styled-components'

export const LoadingMessage = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
`

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  flex-grow: 1;
  padding: 0 ${({ theme }) => theme.spaces.base};
`

export const ContentHolder = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestColor};
  box-shadow: ${({ theme }) => theme.colors.defaultBoxShadow};
  padding: ${({ theme }) => theme.spaces.base};
  border-radius: 2px;
  margin: 0 auto;
  width: 100%;
  transform: translateY(-60px);

  @media (min-width: 48rem) {
    max-width: ${({ theme }) => theme.spaces.containerWidth};
  }
`

export const BackLink = styled(Link)`
  margin-bottom: ${({ theme }) => theme.spaces.base};
  display: inline-block;

  svg {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`

export const ContentHeaderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces.base};
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

export const EventDate = styled.span`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typo.medium};
`

export const BarbecueTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-weight: 500;
  display: block;
  font-size: ${({ theme }) => theme.typo.small};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  opacity: 0.8;
`

export const ContentText = styled.p`
  color: ${({ theme }) => theme.colors.darkestColor};
  display: block;
  font-size: ${({ theme }) => theme.typo.tiny};
  margin-bottom: ${({ theme }) => theme.spaces.base};
  white-space: pre-wrap;

  b {
    font-weight: bold;
  }
`

export const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ParticipantsList = styled.ul`
  margin-bottom: ${({ theme }) => theme.spaces.large};

  > li {
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightYellow};
  }
`
