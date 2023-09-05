import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { AddBarbecueBox } from '.'

describe('AddBarbecueBox', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      onClick: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <AddBarbecueBox {...mockedProps} />
      </ThemeProvider>,
    )
    const boxLabel = screen.getByText('Adicionar churras')
    const boxWrapper = screen.getByTestId('addbarbecuebox-wrapper')

    fireEvent.click(boxWrapper)

    expect(boxLabel).toBeInTheDocument()
    expect(boxWrapper).toBeInTheDocument()
    expect(mockedProps.onClick).toHaveBeenCalled()
  })
})
