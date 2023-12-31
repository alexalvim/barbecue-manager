import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined'
import { BoxText, ContentWrapper, IconHolder } from './styles'

interface IAddBarbecueBoxProps {
  onClick: () => void
}

export const AddBarbecueBox = ({ onClick }: IAddBarbecueBoxProps) => {
  return (
    <ContentWrapper
      data-testid={'addbarbecuebox-wrapper'}
      role="button"
      onClick={onClick}
    >
      <IconHolder>
        <OutdoorGrillOutlinedIcon />
      </IconHolder>
      <BoxText>Adicionar churras</BoxText>
    </ContentWrapper>
  )
}
