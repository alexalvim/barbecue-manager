import styled from 'styled-components'

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.typo.large};
  margin-bottom: ${({ theme }) => theme.spaces.largest};
`

export const FieldsWrapper = styled.div`
  input,
  textarea {
    border: solid 1px ${({ theme }) => theme.colors.darkestColor};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
