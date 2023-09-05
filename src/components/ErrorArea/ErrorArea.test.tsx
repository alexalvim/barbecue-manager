import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { ErrorArea } from '.'

describe('ErrorArea', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      message: 'Test message',
    }
    render(
      <ThemeProvider theme={light}>
        <ErrorArea {...mockedProps} />
      </ThemeProvider>,
    )
    const errorText = screen.getByText(mockedProps.message)

    expect(errorText).toBeInTheDocument()
  })
})
