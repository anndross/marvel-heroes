import { ComponentPropsWithoutRef } from 'react'
import * as S from './styles'

type Props = ComponentPropsWithoutRef<'p'> & {
  color?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  weight?: 'bold' | 'lighter'
}

export const Typography = ({
  children,
  color = 'primary',
  size = 'medium',
  weight = 'lighter',
  ...props
}: Props) => {

  const style = {
    colors: {
      primary: '#404040',
      secondary: '#8C8C8C',
      tertiary: '#B9B9B9',
    },
    sizes: {
      small: '0.8rem',
      medium: '1rem',
      large: '1.6rem'
    },
    weights: {
      lighter: 100,
      bold: 900
    }
  }


  return (
    <S.Typography
      style={{
        fontSize:
          style.sizes[size],
        color: style.colors[color],
        fontWeight: style.weights[weight]
      }}
      {...props}
    >
      {children}
    </S.Typography>
  )
}