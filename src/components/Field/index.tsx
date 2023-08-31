import { ContentWrapper, ErrorMessage, FieldInput, LabelText } from "./styles";

interface IFieldProps {
  formProps: Record<string, any>;
  label: string;
  placeholder: string;
  type: string;
  error: Record<string, any> | null;
  customErrorMessages?: Record<string,string>;
}

export const Field = ({ formProps, label, placeholder, type, error, customErrorMessages }: IFieldProps) => {
  return (
    <ContentWrapper>
      <LabelText>{label}</LabelText>
      <FieldInput type={type} placeholder={placeholder} {...formProps}/>
      {error ?
        <ErrorMessage>
          {error.type === 'required' ?
            (customErrorMessages && customErrorMessages['required']) ||
            'Campo obrigatório!' : null}
          {error.type === 'minLength' ?
            (customErrorMessages && customErrorMessages['minLength']) ||
            'Texto muito curto para este campo!' : null}
          {error.type === 'pattern' ?
            (customErrorMessages && customErrorMessages['pattern']) ||
            'Valor digitado não corresponde com o esperado nesse campo!' : null}
        </ErrorMessage>
      : null}
    </ContentWrapper>
  )
}