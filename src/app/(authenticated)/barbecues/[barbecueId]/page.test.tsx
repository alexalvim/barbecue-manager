import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import BarbecuePage from './page'
import { AuthContext } from '@/context/AuthProvider'
import { formatCentsToCurrency } from '@/utils/formatters'

const mockedPush = jest.fn()
const mockedBarbecueId = '123'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockedPush,
  }),
  useParams: () => ({
    barbecueId: mockedBarbecueId,
  }),
}))

describe('Barbecue page', () => {
  it('should render page correctly page in loading state', () => {
    const mockUser = null
    render(
      <AuthContext.Provider value={mockUser}>
        <ThemeProvider theme={light}>
          <BarbecuePage />
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
          id: mockedBarbecueId,
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
          <BarbecuePage />
        </ThemeProvider>
      </AuthContext.Provider>,
    )

    const backButton = screen.getByTestId('barbecue-back-button')
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
        false,
      )}`,
    )
    const barbecueFirstParticipant = screen.getByText(
      mockUser.barbecues[0].participants[0].name,
    )
    const barbecueSecondParticipant = screen.getByText(
      mockUser.barbecues[0].participants[0].name,
    )

    expect(backButton).toBeInTheDocument()
    expect(backButton).toHaveAttribute('href', '/home')
    expect(barbecueDate).toBeInTheDocument()
    expect(barbecueTitle).toBeInTheDocument()
    expect(participantsQuantity).toBeInTheDocument()
    expect(barbecuePrice).toBeInTheDocument()
    expect(barbecueFirstParticipant).toBeInTheDocument()
    expect(barbecueSecondParticipant).toBeInTheDocument()
  })

  it('should redirect when barbecue is not founded', () => {
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
          <BarbecuePage />
        </ThemeProvider>
      </AuthContext.Provider>,
    )

    expect(mockedPush).toHaveBeenCalledWith('/home')
  })
})
