import styled from 'styled-components'

export const ContentHolder = styled.div`
  padding: ${({ theme }) => theme.spaces.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemText = styled.span<{ $linethrough?: boolean }>`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.small};
  opacity: 0.8;
  font-weight: 700;
  margin-left: ${({ theme }) => theme.spaces.small};

  ${({ $linethrough }) =>
    $linethrough
      ? `
    text-decoration: line-through;
  `
      : ''}
`

export const TextHolder = styled.span`
  display: flex;
  align-items: center;

  > label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  > svg {
    fill: ${({ theme }) => theme.colors.dangerRed};
    width: 1.25rem;
    height: 1.25rem;
  }
`
