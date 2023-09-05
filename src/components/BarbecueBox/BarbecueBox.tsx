import { IBarbecue } from '@/types'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {
  ContentWrapper,
  EventDate,
  BarbecueTitle,
  TopicHolder,
  TopicInfo,
} from './styles'
import { formatCentsToCurrency } from '@/utils/formatters'

interface IBarbecueBoxProps {
  barbecue: IBarbecue
}

export const BarbecueBox = ({ barbecue }: IBarbecueBoxProps) => {
  return (
    <ContentWrapper>
      <div>
        <EventDate href={`/barbecues/${barbecue.id}`}>
          {barbecue.eventDate}
        </EventDate>
        <BarbecueTitle>{barbecue.title}</BarbecueTitle>
      </div>
      <TopicHolder>
        <TopicInfo>
          <PeopleOutlineOutlinedIcon /> {barbecue.participants.length}
        </TopicInfo>
        <TopicInfo>
          <MonetizationOnIcon /> R$
          {formatCentsToCurrency(
            barbecue.participants.reduce(
              (acc, p) => acc + p.contributeValue,
              0,
            ) || 0,
          )}
        </TopicInfo>
      </TopicHolder>
    </ContentWrapper>
  )
}
