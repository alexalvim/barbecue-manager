import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import HomePage from './page'
import { AuthContext } from '@/context/AuthProvider'
import { formatCentsToCurrency } from '@/utils/formatters'

describe('Home page', () => {
  it('should render page correctly page in loading state', () => {
    const mockUser = null
    render(
      <AuthContext.Provider value={mockUser}>
        <ThemeProvider theme={light}>
          <HomePage />
        </ThemeProvider>
      </AuthContext.Provider>,
    )
    const loadingMessage = screen.getByText('Carregando')

    expect(loadingMessage).toBeInTheDocument()
  })

  it('should render page correctly page', () => {
    const mockUser = {
      name: 'name',
      email: 'email',
      password: '12345678',
      id: 1,
      barbecues: [
        {
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
      ],
      authToken: 'auth',
    }
    render(
      <AuthContext.Provider value={mockUser}>
        <ThemeProvider theme={light}>
          <HomePage />
        </ThemeProvider>
      </AuthContext.Provider>,
    )

    const barbecueDate = screen.getByText(mockUser.barbecues[0].eventDate)
    const barbecueTitle = screen.getByText(mockUser.barbecues[0].title)
    const participantsQuantity = screen.getByText(
      `${mockUser.barbecues[0].participants.length}`,
    )
    const barbecuePrice = screen.getByText(
      `R$${formatCentsToCurrency(
        mockUser.barbecues[0].participants.reduce(
          (acc, p) => acc + p.contributeValue,
          0,
        ),
      )}`,
    )
    const addBarbecueBox = screen.getByTestId('addbarbecuebox-wrapper')

    expect(barbecueDate).toBeInTheDocument()
    expect(barbecueDate).toHaveAttribute(
      'href',
      `/barbecues/${mockUser.barbecues[0].id}`,
    )
    expect(barbecueTitle).toBeInTheDocument()
    expect(participantsQuantity).toBeInTheDocument()
    expect(barbecuePrice).toBeInTheDocument()

    expect(addBarbecueBox).toBeInTheDocument()
  })
})
