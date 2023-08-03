'use client'
import { useEffect } from 'react'
import { Cards } from './components/Cards'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { Pagination } from '../Pagination'
import { Actions } from './components/Actions'
import { useSearchParams } from 'next/navigation'
import { EmptyFavorites } from './components/EmptyFavorites'
import { CardsSkeleton } from './components/CardsSkeleton'
import { handleLoadDataWhenIsFavoritesPage } from './utils/handleLoadDataWhenIsFavoritesPage'
import { handleSetVisible } from './utils/handleSetVisible'


export const Heroes = () => {
  const { heroes, visible, setVisible } = useHeroesStore()
  const { get: getPage, has: hasPage } = useSearchParams()


  useEffect(() => {
    if (heroes.length && hasPage('heroes')) {
      const page = getPage('heroes') ?? '1'

      const pageHeroes = handleSetVisible({ heroes: heroes, page: page })

      setVisible(pageHeroes)
      return
    }
  }, [heroes])


  useEffect(() => {
    if (heroes.length && hasPage('favorites')) {
      const favorites = handleLoadDataWhenIsFavoritesPage(heroes)

      setVisible(favorites)
      return
    }
  }, [heroes, hasPage('favorites')])

  return (
    <>
      <Actions />
      {visible?.length
        ?
        <S.Container>
          <Cards />
        </S.Container>
        : hasPage('favorites') ? <EmptyFavorites />
          : hasPage('heroes') &&
          <S.Container>
            <CardsSkeleton />
          </S.Container>
      }
      <Pagination />
    </>
  )



















































  // export const Heroes = () => {
  //   const { fetchHeroes, heroes, visibles, setVisibles } = useHeroesStore()

  //   const params = useSearchParams()

  //   useEffect(() => {
  //     if (params.has('heroes'))
  //       handleLoadDataWhenIsHeroesPage(fetchHeroes, params.get('heroes') ?? '1')
  //   }, [params.toString()])

  //   useEffect(() => {
  //     if (params.has('heroes') && heroes.length) {
  //       const object = heroes.filter(e => {
  //         return Object.keys(e)[0] === (params.get('heroes') ?? '1')
  //       })[0] as any

  //       setVisibles(Object.values(object)[0])
  //     }
  //     else if (params.has('favorites')) {
  //       const favorites = handleLoadDataWhenIsFavoritesPage(heroes)

  //       setVisibles(favorites)
  //     }
  //   }, [heroes, params.toString()])

  //   return (
  //     <>
  //       <Actions />
  //       {visibles?.length
  //         ?
  //         <S.Container>
  //           <Cards />
  //         </S.Container>
  //         : params.has('favorites') ? <EmptyFavorites />
  //           : params.has('heroes') &&
  //           <S.Container>
  //             <CardsSkeleton />
  //           </S.Container>
  //       }
  //       {params.has('heroes') && <Pagination />}
  //     </>
  //   )







































  // useEffect(() => {
  //   if (params.has('favorites')) {
  //     setVisibleHeroes(favorites)
  //   } else if (params.has('heroes')) {
  //     const offset = 20
  //     const pageHero = Number(params.get('heroes'))

  //     fetchHeroes((pageHero - 1) * offset)
  //   }
  // }, [params.toString()])

  // useEffect(() => {
  //   setVisibleHeroes(heroes)
  // }, [heroes])

  // return (
  //   <>
  //     <Actions />
  //     {!visibleHeroes.length && params.has('favorites')
  //       ? <EmptyFavorites />
  //       : <S.Container>
  //         {!visibleHeroes.length && params.has('heroes') ?
  //           Array(20).fill('').map((_, i) => {
  //             const randomWidth = Math.random() * (100 - 20) + 20
  //             return (
  //               <div key={i}>
  //                 <CardSkeleton size='136px' />
  //                 <div style={{ marginTop: '0.6rem' }}>
  //                   <TypographySkeleton width={randomWidth + 'px'} />
  //                 </div>
  //               </div>
  //             )
  //           })
  //           : params.has('heroes') &&
  //           <Cards />
  //         }
  //       </S.Container>
  //     }
  //     {visibleHeroes !== favorites
  //       &&
  //       <Pagination />
  //     }
  //   </>
  // )
}