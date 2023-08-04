import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { TypographySkeleton } from '@/components/TypographySkeleton'
import { Favorite } from '@/components/Favorite'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Hero } from '@/interfaces/HeroInterface'
import { handleToggleFavoriteById } from '@/modules/utils/handleToggleFavoriteById'


export const Name = () => {
  const { heroes, updateHeroes, hero } = useHeroesStore()
  const [heroData, setHeroData] = useState<Hero[]>([])

  useEffect(() => {
    setHeroData(hero)
  }, [hero])

  return (
    <S.Name>
      {heroData.length ?
        <Typography color='primary' size='large' weight='bold'>
          {heroData[0]?.name}
        </Typography>
        :
        <TypographySkeleton width="200px" />
      }
      <Favorite
        height={24}
        isFavorite={heroData[0]?.isFavorite}
        onFavorite={() => {
          const updatedHeroes = handleToggleFavoriteById(heroes, heroData[0].id)

          updateHeroes(updatedHeroes)
        }}
      />
    </S.Name>
  )
}