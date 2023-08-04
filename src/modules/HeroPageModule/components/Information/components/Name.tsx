import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { TypographySkeleton } from '@/components/TypographySkeleton'
import { Favorite } from '@/components/Favorite'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Hero } from '@/interfaces/HeroInterface'

export const Name = () => {
  const { favorites, setFavorites, hero } = useHeroesStore()

  const [heroData, setHeroData] = useState<Hero[]>([])
  const [isFavorite, setIsFavorite] = useState(false)


  useEffect(() => {
    setHeroData(hero)
  }, [hero])

  useEffect(() => {
    setIsFavorite(favorites.some(e => e.id === hero[0].id))
  }, [favorites, hero])

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
        isFavorite={isFavorite}
        onFavorite={() => {
          if (!isFavorite) {
            setFavorites([...favorites, hero[0]])
          }
          else {
            const favoritesWithoutHero = favorites.filter(e => e.id !== hero[0].id)
            setFavorites(favoritesWithoutHero)
          }
        }}
      />
    </S.Name>
  )
}