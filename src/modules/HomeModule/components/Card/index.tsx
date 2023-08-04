import { useRouter } from 'next/navigation'
import * as S from './styles'
import { Hero } from '@/interfaces/HeroInterface'
import { Typography } from '@/components/Typography'
import { Favorite } from '@/components/Favorite'
import { useHeroesStore } from '@/context'
import { handleToggleFavoriteById } from '@/modules/utils/handleToggleFavoriteById'


interface Props {
  hero: Hero
}
export const Card = ({ hero }: Props) => {
  const router = useRouter()
  const { heroes, updateHeroes } = useHeroesStore()

  return (
    <S.Card className='hero-card' key={hero.id}>
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
            const updatedHeroes = handleToggleFavoriteById(heroes, hero.id)

            updateHeroes(updatedHeroes)
          }}
        />
      </div>
    </S.Card>
  )
}