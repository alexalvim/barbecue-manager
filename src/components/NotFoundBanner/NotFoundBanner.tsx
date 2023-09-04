'use client'

import Image from 'next/image'
import { ContentWrapper } from './styles'

export const NotFoundBanner = () => {
  return (
    <ContentWrapper>
      <Image
        src={'/assets/images/gaucho.png'}
        alt={'Imagem de página não encontrada.'}
        width={200}
        height={200}
      />
      <h1>Página não encontrada</h1>
    </ContentWrapper>
  )
}
