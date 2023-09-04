import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { light } from '@/styles/themes/light'
import { NotFoundBanner } from '.'

describe('Modal', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider theme={light}>
        <NotFoundBanner />
      </ThemeProvider>,
    )
    const bannerText = screen.getByText('Página não encontrada')
    const bannerImage = screen.getByAltText('Imagem de página não encontrada.')

    expect(bannerText).toBeInTheDocument()
    expect(bannerImage).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fassets%2Fimages%2Fgaucho.png&w=640&q=75',
    )
  })
})
