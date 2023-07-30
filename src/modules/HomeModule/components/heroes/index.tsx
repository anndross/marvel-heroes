'use client'
import { useContext, useEffect } from 'react'
import { Card } from './card'
import * as S from './styles'
import { useHeroesStore } from '@/context'

export const Heroes = () => {
  const heroesContext = useHeroesStore()

  useEffect(() => {
    heroesContext.fetch()
  }, [heroesContext.fetch])

  return (
    <S.Container>
      {heroesContext?.heroes.map((e: any) => {
        return (
          <Card
            key={e.id + e.name}
            hero={e}
          />
        )
      })}
    </S.Container>
  )
}