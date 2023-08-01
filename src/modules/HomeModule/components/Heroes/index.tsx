'use client'
import { useEffect } from 'react'
import { Card } from './Card'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { Pagination } from '../Pagination'
import { Actions } from './Actions'
import { useSearchParams } from 'next/navigation'

export const Heroes = () => {
  const {
    fetchHeroes,
    heroes,
    visibleHeroes,
    setVisibleHeroes,
    favorites
  } = useHeroesStore()
  const params = useSearchParams()

  useEffect(() => {
    if(params.has('favorites')) {
      setVisibleHeroes(favorites)
    } else if(params.has('heroes')) {
      const offset = 20
      const pageHero = Number(params.get('heroes'))

    fetchHeroes((pageHero - 1) * offset)
    } 
  }, [params.toString()])

  useEffect(() => {
    setVisibleHeroes(heroes)
  }, [heroes])

  return (
    <>
      <Actions />
      <S.Container>
        {visibleHeroes?.map((e: any) => {
            return (
              <Card
                key={e.id + e.name}
                hero={e}
              />
              )
          })
        }
        {!favorites.length }
      </S.Container>
      {visibleHeroes !== favorites
          &&
       <Pagination/>
      }
    </>
  )
}