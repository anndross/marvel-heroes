import { useRouter } from 'next/navigation'
import * as S from './styles'
import { Typography } from '@/components/typography'
import { useHeroesStore } from '@/context'
import { useState } from 'react';

interface Props {
  hero: any;
}

export const Card = ({ hero }: Props) => {
  const router = useRouter()
  const heroesContext = useHeroesStore()
  const [heart, setHeart] = useState(false)

  const iconURL = !heart ? 'heart1.png' : 'heart2.png'

  return (
    <S.Card>
      <img
        onClick={() => router.push('/HeroPage/' + hero.id)}
        src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
        alt=""
        width={'100%'}
      />
      <div>
        <Typography color='primary' size='medium'>
          {hero.name}
        </Typography>
        <img
          onClick={() => {
            console.log('asdas')
            if (heroesContext.favorites.some(e => e === hero)) {
              heroesContext.removeFavorites(hero)
            }
            heroesContext.setFavorites(hero)
            setHeart(!heart)
          }}
          src={`assets/icones/heart/${iconURL}`}
          height={16}
        />
      </div>
    </S.Card>
  )
}