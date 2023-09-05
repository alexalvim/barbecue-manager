import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { CustomCheckbox } from '.'

describe('CustomCheckbox', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      checked: false,
      onCheck: jest.fn(),
    }

    render(
      <ThemeProvider theme={light}>
        <CustomCheckbox {...mockedProps} />
      </ThemeProvider>,
    )
    const checkbox = screen.getByTestId('customcheckbox-input')

    fireEvent.click(checkbox)

    expect(mockedProps.onCheck).toHaveBeenCalled()
  })
})
