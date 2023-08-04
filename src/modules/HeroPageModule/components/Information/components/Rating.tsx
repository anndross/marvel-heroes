import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'

export const Rating = () => {
  const { reviews, hero, setReviews } = useHeroesStore()
  const markedStar = '../assets/review/ratingstarred.png'
  const star = '../assets/review/ratingstar.png'

  const [stars, setStars] = useState<string[]>([])


  useEffect(() => {
    const stars = Array(5).fill('').map((_, i) => {
      const heroReview = reviews[hero[0].id]

      return !heroReview ? star : i < heroReview ? markedStar : star
    })

    setStars(stars)
  }, [hero])

  const onRating = (url: string, index: number) => {
    const mappedStars = stars.map((_, i) => {
      if (url === markedStar) {
        return i >= index ? star : markedStar
      } else {
        return i <= index ? markedStar : star
      }
    })
    setStars(mappedStars)

    if (url === markedStar)
      setReviews({ ...reviews, [hero[0].id]: index })
    else
      setReviews({ ...reviews, [hero[0].id]: index + 1 })
  }

  return (
    <S.Rating>
      <Typography className="text" color='primary' size='medium' weight='lighter'>
        Rating:
      </Typography>
      {stars.map((e, index) => {
        return (
          <img
            onClick={() => {
              onRating(e, index)
            }}
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