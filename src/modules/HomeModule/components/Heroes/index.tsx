'use client'
import { useEffect } from 'react'
import { useHeroesStore } from '@/context'
import { Card } from '../Card'
import { HeroesCardSkeleton } from './HeroesCardSkeleton'



export const Heroes = () => {
  const { heroes, visible, setVisible } = useHeroesStore()

  useEffect(() => {
    if (heroes.length)
      setVisible(heroes)
  }, [heroes, setVisible])

  return (
    <>
      {visible?.length
        ?
        visible.map((hero) => <Card key={hero.id} hero={hero} />)
        :
        Array(20).fill('').map((_, i) => <HeroesCardSkeleton key={i} />)
      }
    </>
  )
}
