import { Typography } from '@/components/Typography'
import * as S from './styles'

export const NoFavorites = () => {
  return (
    <S.ContainerNoFavorites>
      <Typography size='medium' weight='bold'>Não há favoritos adicionados</Typography>
    </S.ContainerNoFavorites>
  )
}