import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Modal } from '.'

describe('Modal', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      isOpened: true,
      onClose: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <Modal {...mockedProps}>
          <p>Test text</p>
        </Modal>
      </ThemeProvider>,
    )
    const childrenText = screen.getByText('Test text')
    const modalOverlay = screen.getByTestId('modal-overlay')

    fireEvent.click(modalOverlay)

    expect(mockedProps.onClose).toHaveBeenCalled()
    expect(childrenText).toBeInTheDocument()
  })

  it('should return null when isOpened is false', () => {
    const mockedProps = {
      isOpened: false,
      onClose: jest.fn(),
    }
    const { container } = render(
      <ThemeProvider theme={light}>
        <Modal {...mockedProps}>
          <p>Test text</p>
        </Modal>
      </ThemeProvider>,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
