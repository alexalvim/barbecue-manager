import { Container, Indicator, Input } from './styles'

interface ICustomCheckboxProps {
  checked: boolean
  onCheck: () => void
}

export const CustomCheckbox = ({ checked, onCheck }: ICustomCheckboxProps) => {
  return (
    <Container>
      <Input type="checkbox" checked={checked} onChange={onCheck} />
      <Indicator />
    </Container>
  )
}
