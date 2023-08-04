'use client'
import { useEffect } from 'react'
import { useHeroesStore } from '@/context'
import { useSearchParams } from 'next/navigation'
import { handleReturnHeroesOfThePage } from './utils/handleReturnHeroesOfThePage'
import { Card } from '../Card'
import { HeroesCardSkeleton } from './HeroesCardSkeleton'



export const Heroes = () => {
  const { heroes, visible, setVisible } = useHeroesStore()
  const { get: getPage, has: hasPage } = useSearchParams()

  useEffect(() => {
    if (heroes.length && hasPage('heroes')) {
      const page = getPage('heroes') ?? '1'

      const pageHeroes = handleReturnHeroesOfThePage({ heroes: heroes, page: page })

      setVisible(pageHeroes)
      return
    }
  }, [heroes])

  return (
    <>
      {visible?.length
        ?
        visible.map((hero) => <Card key={hero.id} hero={hero} />)
        :
        visible.map((hero) => <HeroesCardSkeleton key={hero.id} />)
      }
    </>
  )
}
