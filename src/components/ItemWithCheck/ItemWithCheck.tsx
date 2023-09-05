import { formatCentsToCurrency } from '@/utils/formatters'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { ContentHolder, ItemText, RemoveButton, TextHolder } from './styles'
import { CustomCheckbox } from '../CustomCheckbox'

interface IItemWihCheckProps {
  mainLabel: string
  price: number
  onCheck: () => void
  onRemove: () => void
  checked: boolean
}

export const ItemWithCheck = ({
  mainLabel,
  price,
  onCheck,
  onRemove,
  checked,
}: IItemWihCheckProps) => {
  return (
    <ContentHolder>
      <TextHolder>
        <label>
          <CustomCheckbox checked={checked} onCheck={onCheck} />
          <ItemText>{mainLabel}</ItemText>
        </label>
      </TextHolder>
      <TextHolder>
        <ItemText $linethrough={checked}>
          R$ {formatCentsToCurrency(price)}
        </ItemText>
        <RemoveButton
          data-testid={'itemwithcheck-removebutton'}
          onClick={onRemove}
        >
          <DeleteOutlineOutlinedIcon />
        </RemoveButton>
      </TextHolder>
    </ContentHolder>
  )
}
