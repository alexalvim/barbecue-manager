import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Button } from '.'

describe('Button', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      label: 'Label',
      onClick: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <Button onClick={mockedProps.onClick}>{mockedProps.label}</Button>
      </ThemeProvider>,
    )
    const buttonText = screen.getByText(mockedProps.label)

    fireEvent.click(buttonText)

    expect(buttonText).toBeInTheDocument()
    expect(mockedProps.onClick).toHaveBeenCalled()
  })
})
