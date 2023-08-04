import { Typography } from '@/components/Typography'
import * as S from './styles'
import { SortHeroes } from './SortHeroes'
import { ShowFavorites } from './ShowFavorites'
import { useHeroesStore } from '@/context'
import { Hero } from '@/interfaces/HeroInterface'
import { useEffect, useState } from 'react'

export const Actions = () => {
  const { total } = useHeroesStore()
  const [totalCharacters, setTotalCharacters] = useState('')

  useEffect(() => {
    setTotalCharacters(total)
  }, [total])

  return (
    <S.Actions>
      <Typography color='secondary' size='medium'>
        Encontrados {totalCharacters} heróis
      </Typography>
      <S.FiltersContainer>
        <SortHeroes />
        <ShowFavorites />
      </S.FiltersContainer>
    </S.Actions>
  )
}