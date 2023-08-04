import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { TypographySkeleton } from '@/components/TypographySkeleton'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Hero } from '@/interfaces/HeroInterface'

export const Collection = () => {
  const { hero } = useHeroesStore()
  const [heroData, setHeroData] = useState<Hero[]>([])

  useEffect(() => {
    setHeroData(hero)
  }, [hero])
  console.log(hero)
  return (
    <S.Collection>
      <S.Job>
        <Typography color='primary' size='medium' weight='lighter'>
          Quadrinhos
        </Typography>
        <div>
          <img src="../assets/icones/book/Group.png" height={30} />
          {heroData.length
            ?
            <Typography className="text" color='primary' size='medium' weight='lighter'>
              {heroData[0]?.comics?.available}
            </Typography>
            :
            <TypographySkeleton width="10px" />
          }
        </div>
      </S.Job>
      <S.Job>
        <Typography color='primary' size='medium' weight='lighter'>
          Filmes
        </Typography>
        <div>
          <img src="../assets/icones/video/Shape.png" height={30} />
          {heroData.length
            ?
            <Typography className="text" color='primary' size='medium' weight='lighter'>
              {heroData[0]?.series?.available}
            </Typography>
            :
            <TypographySkeleton width="10px" />
          }
        </div>
      </S.Job>
    </S.Collection>
  )
}