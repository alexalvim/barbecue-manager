import { IBarbecue } from '@/types'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import {
  ContentWrapper,
  EventDate,
  EventTitle,
  TopicHolder,
  TopicInfo,
} from './styles'

interface IBarbecueBoxProps {
  barbecue: IBarbecue
}

export const BarbecueBox = ({ barbecue }: IBarbecueBoxProps) => {
  return (
    <ContentWrapper>
      <div>
        <EventDate>{barbecue.eventDate}</EventDate>
        <EventTitle>{barbecue.title}</EventTitle>
      </div>
      <TopicHolder>
        <TopicInfo>
          <PeopleOutlineOutlinedIcon /> {barbecue.participants.length}
        </TopicInfo>
        <TopicInfo>
          <MonetizationOnIcon /> R$
          {barbecue.participants.reduce((acc, p) => acc + p.price, 0)}
        </TopicInfo>
      </TopicHolder>
    </ContentWrapper>
  )
}
