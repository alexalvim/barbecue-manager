import { ContentWrapper } from './styles'

interface IErrorAreaProps {
  message: string
}

export const ErrorArea = ({ message }: IErrorAreaProps) => {
  return <ContentWrapper>{message}</ContentWrapper>
}
