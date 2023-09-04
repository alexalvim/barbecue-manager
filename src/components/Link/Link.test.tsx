import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Link, LinkButton } from '.'

describe('Link', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      label: 'Label',
      href: '/oi',
    }
    render(
      <ThemeProvider theme={light}>
        <Link href={mockedProps.href}>{mockedProps.label}</Link>
      </ThemeProvider>,
    )
    const linkText = screen.getByText(mockedProps.label)

    expect(linkText).toBeInTheDocument()
    expect(linkText).toHaveAttribute('href', mockedProps.href)
  })
})

describe('LinkButton', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      label: 'Label',
      onClick: jest.fn(),
    }
    render(
      <ThemeProvider theme={light}>
        <LinkButton onClick={mockedProps.onClick}>Label</LinkButton>
      </ThemeProvider>,
    )
    const linkText = screen.getByText(mockedProps.label)

    fireEvent.click(linkText)

    expect(linkText).toBeInTheDocument()
    expect(mockedProps.onClick).toHaveBeenCalled()
  })
})
