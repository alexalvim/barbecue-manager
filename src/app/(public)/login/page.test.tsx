import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import LoginPage from './page'

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

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('LoginPage', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <LoginPage />
      </ThemeProvider>,
    )
    const emailInput = screen.getByPlaceholderText('email')
    const passwordInput = screen.getByPlaceholderText('senha')
    const registerLink = screen.getByText('Cadastrar-se')
    const enterButton = screen.getByText('Entrar')

    fireEvent.change(emailInput, {
      target: { value: 'test@test.com' },
    })

    fireEvent.change(passwordInput, {
      target: { value: '12345678' },
    })

    fireEvent.click(enterButton)

    expect(registerLink).toBeInTheDocument()
    expect(registerLink).toHaveAttribute('href', '/register')
    expect(enterButton).toBeInTheDocument()
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })
})
