import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import RegisterPage from './page'

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

describe('RegisterPage', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <RegisterPage />
      </ThemeProvider>,
    )
    const nameInput = screen.getByPlaceholderText('nome')
    const emailInput = screen.getByPlaceholderText('email')
    const passwordInput = screen.getByPlaceholderText('senha')
    const loginLink = screen.getByText('Voltar para o login')
    const registerButton = screen.getByText('Cadastrar')

    fireEvent.change(nameInput, {
      target: { value: 'test name' },
    })

    fireEvent.change(emailInput, {
      target: { value: 'test@test.com' },
    })

    fireEvent.change(passwordInput, {
      target: { value: '12345678' },
    })

    fireEvent.click(registerButton)

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute('href', '/login')
    expect(registerButton).toBeInTheDocument()
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })
})
