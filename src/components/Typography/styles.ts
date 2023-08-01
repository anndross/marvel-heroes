import { styled } from "../../stitches.config";

export const Typography = styled('p', {
  fontFamily: "'Work Sans', sans-serif",
  variants: {
    color: {
      primary: {
        color: '$secondary300'
      },
      secondary: {
        color: '$secondary200',
      },
      tertiary: {
        color: '$secondary100',
      },
    },
    size: {
      small: {
        fontSize: '$sizes$small'
      },
      medium: {
        fontSize: '$sizes$medium'
      },
      large: {
        fontSize: '$sizes$large'
      },
    },
    weight: {
      lighter: {
        fontWeight: '$weights$lighter'
      },
      bold: {
        fontWeight: '$weights$bold'
      }
    }
  }
})