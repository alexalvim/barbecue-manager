
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  color: ${({ theme }) => theme.colors.dangerRed};
  background-color: ${({ theme }) => theme.colors.lightRed};
  font-size: ${({ theme }) => theme.typo.tiny};
  font-weight: bold;
  padding: ${({ theme }) => theme.spaces.base};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${({ theme }) => theme.colors.dangerRed};
  margin-bottom: ${({ theme }) => theme.spaces.base};
`;