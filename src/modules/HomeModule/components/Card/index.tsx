import { useRouter } from 'next/navigation'
import * as S from './styles'
import { Hero } from '@/interfaces/HeroInterface'
import { Typography } from '@/components/Typography'
import { Favorite } from '@/components/Favorite'
import { useHeroesStore } from '@/context'


interface Props {
  hero: Hero
}
export const Card = ({ hero }: Props) => {
  const router = useRouter()
  const { favorites, setFavorites } = useHeroesStore()

  const isFavorite = favorites.some((e) => e.id === hero.id)

  return (
    <S.Card key={hero?.id}>
      <img
        onClick={() => router.push('/' + hero?.id)}
        src={hero?.thumbnail?.path + '.' + hero?.thumbnail?.extension}
        alt="character"
      />
      <div>
        <Typography color='primary' size='medium'>
          {hero.name}
        </Typography>
        <Favorite
          isFavorite={isFavorite}
          onFavorite={() => {
            if (!isFavorite) {
              setFavorites([...favorites, hero])
            }
            else {
              const favoritesWithoutHero = favorites.filter(e => e.id !== hero.id)
              setFavorites(favoritesWithoutHero)
            }
          }}
        />
      </div>
    </S.Card>
  )
}