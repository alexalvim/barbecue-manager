import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { Banner } from '.'

describe('Banner', () => {
  it('should render component correctly', () => {
    const mockedProps = {
      title: 'Title',
    }
    render(
      <ThemeProvider theme={light}>
        <Banner {...mockedProps} />
      </ThemeProvider>,
    )
    const bannerTitle = screen.getByText(mockedProps.title)

    expect(bannerTitle).toBeInTheDocument()
  })
})
