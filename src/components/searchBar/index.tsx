import * as S from './styles'

interface Props {
  variant?: 'primary' | 'secondary'
}

export const SearchBar = ({ variant = 'primary' }: Props) => {
  const url = variant === 'secondary' ? '../assets/busca/Lupa/Shape.png' : 'assets/busca/Lupa/Shape.png'

  return (
    <S.Container variant={variant}>
      <S.Icon src={url} />
      <S.Input placeholder="Procure por heróis" />
    </S.Container>
  )
}