import { Typography } from '@/components/Typography'
import { TypographySkeleton } from '@/components/TypographySkeleton'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Hero } from '@/interfaces/HeroInterface'

export const Description = () => {
  const { hero } = useHeroesStore()
  const [heroData, setHeroData] = useState<Hero[]>([])

  useEffect(() => {
    setHeroData(hero)
  }, [hero])

  return (
    <>
      {heroData.length
        ?
        <Typography className="text" color='tertiary' size='medium' weight='lighter'>
          {heroData[0]?.description || 'sem descrição'}
        </Typography>
        :
        <div style={{ display: 'grid', gap: '10px', marginTop: '40px' }}>
          <TypographySkeleton width="200px" />
          <TypographySkeleton width="350px" />
          <TypographySkeleton width="300px" />
          <TypographySkeleton width="300px" />
          <TypographySkeleton width="200px" />
          <TypographySkeleton width="300px" />
        </div>
      }
    </>
  )
}