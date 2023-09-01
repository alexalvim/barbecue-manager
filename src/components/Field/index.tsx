import { ContentWrapper, ErrorMessage, FieldInput, FieldTextArea, LabelText } from "./styles";

interface IFieldProps {
  formProps: Record<string, any>;
  label: string;
  placeholder: string;
  type: string;
  error: Record<string, any> | null;
}

export const Field = ({ formProps, label, placeholder, type, error }: IFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      {type === 'textarea' ? 
        <FieldTextArea placeholder={placeholder} {...formProps}/>
        : <FieldInput type={type} placeholder={placeholder} {...formProps}/>
      }
      {error && error.message ?
        <ErrorMessage>
          {error.message}
        </ErrorMessage>
      : null}
    </ContentWrapper>
  )
}