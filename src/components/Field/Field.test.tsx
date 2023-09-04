import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Field } from '.'

describe('Field', () => {
  it('should render component correctly with input text', () => {
    const mockedProps = {
      formProps: {
        name: 'inputName',
        ref: jest.fn(),
        onChange: jest.fn(),
        onBlur: jest.fn(),
      },
      label: 'Label',
      placeholder: 'Placeholder',
      type: 'text',
      errorMessage: 'Error message',
    }
    render(
      <ThemeProvider theme={light}>
        <Field {...mockedProps} />
      </ThemeProvider>,
    )
    const labelText = screen.getByText(mockedProps.label)
    const inputElement = screen.getByPlaceholderText(mockedProps.placeholder)
    const fieldInput = screen.getByTestId('field-input')

    fireEvent.change(inputElement, {
      target: { value: 'test' },
    })
    fireEvent.blur(inputElement)

    expect(labelText).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(fieldInput).toBeInTheDocument()
    expect(mockedProps.formProps.onChange).toHaveBeenCalled()
    expect(mockedProps.formProps.onBlur).toHaveBeenCalled()
  })

  it('should render component correctly with textarea', () => {
    const mockedProps = {
      formProps: {
        name: 'inputName',
        ref: jest.fn(),
        onChange: jest.fn(),
        onBlur: jest.fn(),
      },
      label: 'Label',
      placeholder: 'Placeholder',
      type: 'textarea',
      errorMessage: 'Error message',
    }
    render(
      <ThemeProvider theme={light}>
        <Field {...mockedProps} />
      </ThemeProvider>,
    )
    const labelText = screen.getByText(mockedProps.label)
    const errorText = screen.getByText(mockedProps.errorMessage)
    const inputElement = screen.getByPlaceholderText(mockedProps.placeholder)
    const fieldTextArea = screen.getByTestId('field-textarea')

    fireEvent.change(inputElement, {
      target: { value: 'test' },
    })
    fireEvent.blur(inputElement)

    expect(labelText).toBeInTheDocument()
    expect(errorText).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(fieldTextArea).toBeInTheDocument()
    expect(mockedProps.formProps.onChange).toHaveBeenCalled()
    expect(mockedProps.formProps.onBlur).toHaveBeenCalled()
  })
})
