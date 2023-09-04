import { UseFormRegisterReturn } from 'react-hook-form'
import {
  ContentWrapper,
  ErrorMessage,
  FieldInput,
  FieldTextArea,
  LabelText,
} from './styles'

interface IFieldProps {
  formProps: UseFormRegisterReturn<string>
  label: string
  placeholder: string
  type: string
  errorMessage: string | null
}

export const Field = ({
  formProps,
  label,
  placeholder,
  type,
  errorMessage,
}: IFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      {type === 'textarea' ? (
        <FieldTextArea
          data-testid={'field-textarea'}
          placeholder={placeholder}
          {...formProps}
        />
      ) : (
        <FieldInput
          data-testid={'field-input'}
          type={type}
          placeholder={placeholder}
          {...formProps}
        />
      )}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </ContentWrapper>
  )
}
