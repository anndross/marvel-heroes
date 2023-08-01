import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { SortHeroes } from './SortHeroes'
import { ShowFavorites } from './ShowFavorites'
import { useHeroesStore } from '@/context'

export const Actions = () => {
    const {total} = useHeroesStore()
    return (
        <S.Actions>
            <Typography color='secondary' size='medium'>
            Encontrados {total} heróis
            </Typography>
        <S.FiltersContainer>
          <SortHeroes />
          <ShowFavorites/>
        </S.FiltersContainer>
      </S.Actions>
    )
}