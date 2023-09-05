import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { BarbecueBox } from '.'
import { formatCentsToCurrency } from '@/utils/formatters'

describe('BarbecueBox', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      barbecue: {
        id: '1',
        title: 'Title',
        description: '',
        observation: '',
        priceWithDrinks: 1000,
        priceWithoutDrinks: 1000,
        eventDate: '10/10/2010',
        participants: [
          {
            id: '1',
            name: 'Foo',
            contributeValue: 1000,
            paid: false,
          },
          {
            id: '2',
            name: 'Bar',
            contributeValue: 2000,
            paid: false,
          },
        ],
      },
    }

    const mockedTotalPrice = mockedProps.barbecue.participants.reduce(
      (acc, p) => acc + p.contributeValue,
      0,
    )

    render(
      <ThemeProvider theme={light}>
        <BarbecueBox {...mockedProps} />
      </ThemeProvider>,
    )
    const barbecueDate = screen.getByText(mockedProps.barbecue.eventDate)
    const barbecueTitle = screen.getByText(mockedProps.barbecue.title)
    const participantsQuantity = screen.getByText(
      `${mockedProps.barbecue.participants.length}`,
    )
    const barbecuePrice = screen.getByText(
      `R$${formatCentsToCurrency(mockedTotalPrice, false)}`,
    )

    expect(barbecueDate).toBeInTheDocument()
    expect(barbecueDate).toHaveAttribute(
      'href',
      `/barbecues/${mockedProps.barbecue.id}`,
    )
    expect(barbecueTitle).toBeInTheDocument()
    expect(participantsQuantity).toBeInTheDocument()
    expect(barbecuePrice).toBeInTheDocument()
  })
})
