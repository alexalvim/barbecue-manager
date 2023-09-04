import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      mainColor: string
      darkestColor: string
      lightestColor: string
      dangerRed: string
      lightRed: string
      lightGray: string
      overlayGray: string
      defaultBoxShadow: string
      darkYellow: string
      lightYellow: string
    }

    spaces: {
      tiny: string
      small: string
      medium: string
      base: string
      large: string
      largest: string
      containerWidth: string
      authContainerWidth: string
    }

    typo: {
      tiny: string
      small: string
      medium: string
      large: string
    }
  }
}
