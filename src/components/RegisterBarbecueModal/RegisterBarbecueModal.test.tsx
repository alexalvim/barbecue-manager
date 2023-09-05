import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { RegisterBarbecueModal } from '.'

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

describe('RegisterBarbecueModal', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      isOpened: true,
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
    render(
      <ThemeProvider theme={light}>
        <RegisterBarbecueModal {...mockedProps} />
      </ThemeProvider>,
    )
    const modalTitle = screen.getByText('Cadastrar churras')
    const barbecueTitleInput = screen.getByPlaceholderText('Título do evento')
    const eventDateInput = screen.getByPlaceholderText('dd/mm/aaaa')
    const closeButton = screen.getByText('Fechar')
    const registerButton = screen.getByText('Cadastrar')

    fireEvent.change(barbecueTitleInput, {
      target: { value: 'Title Test' },
    })

    fireEvent.change(eventDateInput, {
      target: { value: '20/10/2020' },
    })

    fireEvent.click(closeButton)

    fireEvent.click(registerButton)

    expect(modalTitle).toBeInTheDocument()
    expect(barbecueTitleInput).toBeInTheDocument()
    expect(eventDateInput).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
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
        <RegisterBarbecueModal {...mockedProps} />
      </ThemeProvider>,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
