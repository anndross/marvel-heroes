import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { TypographySkeleton } from '@/components/TypographySkeleton'
import { Favorite } from '@/components/Favorite'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Hero } from '@/interfaces/HeroInterface'


export const Name = () => {
  const { heroes, updateHeroes, hero } = useHeroesStore()
  const [heroData, setHeroData] = useState<Hero[]>([])


  useEffect(() => {
    setHeroData(hero)
  }, [hero])

  const toggleFavoriteById = (array: typeof heroes, id: string) => {
    array.forEach(object => {
      const key = Object.keys(object)[0];
      const objectArray = object[key];

      const foundObject = objectArray.find(obj => obj.id === id);
      if (foundObject) {
        foundObject.isFavorite = !foundObject.isFavorite;
      }
    });

    return array;
  }

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
        isFavorite={heroData[0]?.isFavorite}
        onFavorite={() => {
          const updatedHeroes = toggleFavoriteById(heroes, heroData[0].id)

          updateHeroes(updatedHeroes)
        }}
      />
    </S.Name>
  )
}