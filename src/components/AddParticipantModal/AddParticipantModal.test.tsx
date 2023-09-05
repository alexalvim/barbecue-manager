import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { AddParticipantModal } from '.'
import { formatCentsToCurrency } from '@/utils'

const mockedHandleSubmit = jest.fn()

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    handleSubmit: mockedHandleSubmit,
    register: jest.fn(),
    reset: jest.fn(),
    formState: {
      errors: [],
    },
  }),
}))

describe('AddParticipantModal', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      isOpened: true,
      onClose: jest.fn(),
      barbecue: {
        id: 'b1',
        title: 'title',
        description: '',
        observation: '',
        priceWithDrinks: 1500,
        priceWithoutDrinks: 1000,
        eventDate: '10/10/2010',
        participants: [],
      },
      user: {
        name: 'Name',
        email: 'Email',
        password: '12345678',
        id: 1,
        barbecues: [
          {
            id: 'b1',
            title: 'title',
            description: '',
            observation: '',
            priceWithDrinks: 1500,
            priceWithoutDrinks: 1000,
            eventDate: '10/10/2010',
            participants: [],
          },
        ],
        authToken: 'auth',
      },
    }
    render(
      <ThemeProvider theme={light}>
        <AddParticipantModal {...mockedProps} />
      </ThemeProvider>,
    )
    const modalTitle = screen.getByText('Adicionar Participante')
    const nameInput = screen.getByPlaceholderText('Nome do participante')
    const contributeValueInput = screen.getByPlaceholderText('Ex: 10,00')
    const labelPriceWithDrinks = screen.getByText(
      `R$ ${formatCentsToCurrency(
        mockedProps.barbecue.priceWithDrinks,
      )} com bebida`,
    )
    const labelPriceWithoutDrinks = screen.getByText(
      `R$ ${formatCentsToCurrency(
        mockedProps.barbecue.priceWithoutDrinks,
      )} sem bebida`,
    )
    const closeButton = screen.getByText('Fechar')
    const addButton = screen.getByText('Adicionar')

    fireEvent.change(nameInput, {
      target: { value: 'Name Test' },
    })

    fireEvent.change(contributeValueInput, {
      target: { value: '20' },
    })

    fireEvent.click(closeButton)

    fireEvent.click(addButton)

    expect(modalTitle).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(contributeValueInput).toBeInTheDocument()
    expect(labelPriceWithDrinks).toBeInTheDocument()
    expect(labelPriceWithoutDrinks).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    expect(mockedProps.onClose).toHaveBeenCalled()
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })

  it('should return null when isOpened is false', () => {
    const mockedProps = {
      isOpened: false,
      onClose: jest.fn(),
      user: {
        name: 'Name',
        email: 'Email',
        password: '12345678',
        id: 1,
        barbecues: [],
        authToken: 'auth',
      },
    }
    const { container } = render(
      <ThemeProvider theme={light}>
        <AddParticipantModal {...mockedProps} />
      </ThemeProvider>,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
