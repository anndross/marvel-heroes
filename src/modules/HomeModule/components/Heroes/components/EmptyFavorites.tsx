import { Typography } from '@/components/Typography'
import * as S from '../styles'

export const EmptyFavorites = () => {
  return (
    <S.ContainerEmptyFavorite>
      <Typography size='medium' weight='bold'>Não há favoritos adicionados</Typography>
    </S.ContainerEmptyFavorite>
  )
}