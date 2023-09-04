import styled from 'styled-components'

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.typo.large};
  margin-bottom: ${({ theme }) => theme.spaces.largest};
`

export const FieldsWrapper = styled.div`
  input {
    border: solid 1px ${({ theme }) => theme.colors.darkestColor};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FieldDisclaimer = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.tiny};
  margin-bottom: ${({ theme }) => theme.spaces.largest};
  line-height: 1.8;
  border: solid 2px ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => `${theme.colors.mainColor}20`};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spaces.medium};
  font-weight: bold;
`
