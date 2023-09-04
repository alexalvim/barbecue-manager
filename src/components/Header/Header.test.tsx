import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Header } from '.'
import { AuthContext } from '@/context/AuthProvider'

const mockedPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
}))

describe('Header', () => {
  it('should render component correctly', () => {
    const mockUser = {
      name: 'name',
      email: 'email',
      password: '12345678',
      id: 1,
      barbecues: [],
      authToken: 'auth',
    }

    render(
      <AuthContext.Provider value={mockUser}>
        <ThemeProvider theme={light}>
          <Header />
        </ThemeProvider>
      </AuthContext.Provider>,
    )
    const nameText = screen.getByText(`Olá, ${mockUser.name}`)
    const logoutButton = screen.getByText('Sair')

    fireEvent.click(logoutButton)

    expect(nameText).toBeInTheDocument()
    expect(logoutButton).toBeInTheDocument()
    expect(mockedPush).toHaveBeenCalled()
  })

  it('should render component without user correctly', () => {
    render(
      <AuthContext.Provider value={null}>
        <ThemeProvider theme={light}>
          <Header />
        </ThemeProvider>
      </AuthContext.Provider>,
    )
    const loadingText = screen.getByText('Carregando')

    expect(loadingText).toBeInTheDocument()
  })
})
