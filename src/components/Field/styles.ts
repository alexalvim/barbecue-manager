import styled from 'styled-components'

export const ContentWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.largest};
`

export const LabelText = styled.label`
  color: ${({ theme }) => theme.colors.darkestColor};
  font-size: ${({ theme }) => theme.typo.medium};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spaces.base};
`

export const FieldInput = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.typo.small};
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.base}`};

  &::placeholder {
    font-style: italic;
  }
`

export const FieldTextArea = styled.textarea`
  border: none;
  font-size: ${({ theme }) => theme.typo.small};
  padding: ${({ theme }) => `${theme.spaces.medium} ${theme.spaces.base}`};
  resize: none;
  height: 200px;
  font-family: __Raleway_bcd626, __Raleway_Fallback_bcd626;

  &::placeholder {
    font-style: italic;
    font-family: __Raleway_bcd626, __Raleway_Fallback_bcd626;
  }
`

export const ErrorMessage = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typo.tiny};
  color: ${({ theme }) => theme.colors.dangerRed};
  margin-top: ${({ theme }) => theme.spaces.small};
`
