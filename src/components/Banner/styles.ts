import styled from 'styled-components'

export const ContentWrapper = styled.div<{ $withOverlay: boolean }>`
  background-color: ${({ theme }) => theme.colors.mainColor};
  background-image: url('/assets/images/bbq-pattern.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 200px;

  ${({ $withOverlay, theme }) =>
    $withOverlay
      ? `
    height: 400px;
    background-image:
      linear-gradient(to bottom, ${theme.colors.mainColor}00 50%, ${theme.colors.mainColor}),
      url('/assets/images/bbq-pattern.png');
  `
      : ''}
`

export const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.large};
  margin-top: 70px;
  padding: 0 ${({ theme }) => theme.spaces.base};
`
