import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { ItemWithCheck } from '.'
import { formatCentsToCurrency } from '@/utils'

describe('ItemWithCheck', () => {
  it('should render component correctly without check', () => {
    const mockedProps = {
      mainLabel: 'Main Label',
      price: 1000,
      onCheck: jest.fn(),
      onRemove: jest.fn(),
      checked: false,
    }
    render(
      <ThemeProvider theme={light}>
        <ItemWithCheck {...mockedProps} />
      </ThemeProvider>,
    )
    const mainLabelText = screen.getByText(mockedProps.mainLabel)
    const priceText = screen.getByText(
      `R$ ${formatCentsToCurrency(mockedProps.price)}`,
    )
    const checkbox = screen.getByTestId('customcheckbox-input')
    const removeButton = screen.getByTestId('itemwithcheck-removebutton')

    fireEvent.click(checkbox)
    fireEvent.click(removeButton)

    expect(mainLabelText).toBeInTheDocument()
    expect(priceText).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
    expect(removeButton).toBeInTheDocument()
    expect(mockedProps.onRemove).toHaveBeenCalled()
    expect(mockedProps.onCheck).toHaveBeenCalled()
  })

  it('should render component correctly checked', () => {
    const mockedProps = {
      mainLabel: 'Main Label',
      price: 1000,
      onCheck: jest.fn(),
      onRemove: jest.fn(),
      checked: true,
    }
    render(
      <ThemeProvider theme={light}>
        <ItemWithCheck {...mockedProps} />
      </ThemeProvider>,
    )
    const mainLabelText = screen.getByText(mockedProps.mainLabel)
    const priceText = screen.getByText(
      `R$ ${formatCentsToCurrency(mockedProps.price)}`,
    )
    const checkbox = screen.getByTestId('customcheckbox-input')
    const removeButton = screen.getByTestId('itemwithcheck-removebutton')

    fireEvent.click(checkbox)
    fireEvent.click(removeButton)

    expect(mainLabelText).toBeInTheDocument()
    expect(priceText).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
    expect(removeButton).toBeInTheDocument()
    expect(mockedProps.onRemove).toHaveBeenCalled()
    expect(mockedProps.onCheck).toHaveBeenCalled()
  })
})
