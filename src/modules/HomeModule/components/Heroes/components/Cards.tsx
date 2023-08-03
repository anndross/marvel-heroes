import * as S from '../styles'
import { useRouter, useSearchParams } from 'next/navigation'
import { Hero } from '@/interfaces/HeroInterface';
import { Typography } from '@/components/Typography'
import { Favorite } from '@/components/Favorite';
import { useHeroesStore } from '@/context'
import { handleLoadDataWhenIsFavoritesPage } from '../utils/handleLoadDataWhenIsFavoritesPage';
import { handleLoadDataWhenIsHeroesPage } from '../utils/handleLoadDataWhenIsHeroesPage';
import { useEffect, useState } from 'react';

interface Props {
  data: Hero[]
}

export const Cards = () => {
  const { heroes, updateHeroes, visible, setVisible } = useHeroesStore()
  const [cards, setCards] = useState<Hero[]>([])
  const router = useRouter()

  useEffect(() => {
    setCards(visible)
  }, [visible])

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
    <>
      {cards?.map((hero) => {
        return (
          <S.Card key={hero.id}>
            <img
              onClick={() => router.push('/' + hero.id)}
              src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
              alt="character"
            />
            <div>
              <Typography color='primary' size='medium'>
                {hero.name}
              </Typography>
              <Favorite
                isFavorite={hero.isFavorite}
                onFavorite={() => {
                  const updatedHeroes = toggleFavoriteById(heroes, hero.id)

                  updateHeroes(updatedHeroes)
                }}
              />
            </div>
          </S.Card>
        )
      })
      }
    </>
  )
}