import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { useHeroesStore } from '@/context'
import { Hero } from '@/interfaces/HeroInterface'
import { useEffect, useState } from 'react'
import { Heroes } from '@/interfaces/HeroesInterface'

export const Rating = () => {
  const { hero } = useHeroesStore()
  const markedStar = '../assets/review/ratingstarred.png'
  const star = '../assets/review/ratingstar.png'

  const [stars, setStars] = useState<string[]>([])


  useEffect(() => {
    const stars = Array(5).fill('').map((_, i) => {
      return i < hero[0]?.review ? markedStar : star
    })

    setStars(stars)
  }, [hero])


  return (
    <S.Rating>
      <Typography className="text" color='primary' size='medium' weight='lighter'>
        Rating:
      </Typography>
      {stars.map((e, index) => {
        return (
          <img
            key={index}
            src={e}
            alt=""
            height={20}
          />
        )
      })
      }
    </S.Rating>
  )
}