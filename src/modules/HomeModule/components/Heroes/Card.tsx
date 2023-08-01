import { useRouter } from 'next/navigation'
import * as S from './styles'
import { Typography } from '@/components/Typography'
import { useHeroesStore } from '@/context'
import { Favorite } from '@/components/Favorite';
import { useEffect, useState } from 'react';

interface Props {
  hero: any;
}

export const Card = ({ hero }: Props) => {
  const router = useRouter()
  const heroesContext = useHeroesStore()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if(heroesContext.favorites.some(e => e === hero))
      setIsFavorite(true)
    else 
      setIsFavorite(false)
  }, [heroesContext])

  return (
    <S.Card>
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
          favoriteMethods={{isFavorite, setIsFavorite}}
          onFavorite={() => heroesContext.setFavorites(hero)}
        />
      </div>
    </S.Card>
  )
}