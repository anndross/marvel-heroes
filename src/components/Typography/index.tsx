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

  return (
    <S.Typography
      color={color}
      size={size}
      weight={weight}
      {...props}
    >
      {children}
    </S.Typography>
  )
}