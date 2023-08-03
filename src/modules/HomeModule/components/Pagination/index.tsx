import { useEffect, useState } from 'react'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { useRouter, useSearchParams } from 'next/navigation'
import { handleLoadDataWhenIsHeroesPage } from '../Heroes/utils/handleLoadDataWhenIsHeroesPage'

export const Pagination = () => {
  const [addNumber, setAddNumber] = useState(1)
  const router = useRouter()
  const params = useSearchParams()
  const { total, fetchHeroes } = useHeroesStore()

  const [quantity, setQuantity] = useState(8)

  const { get: getPage } = useSearchParams()

  // useEffect(() => {
  //   if (params.has('heroes'))
  //     handleLoadDataWhenIsHeroesPage(fetchHeroes, getPage('heroes') ?? '1')
  // }, [params.toString()])

  useEffect(() => {
    if (Number(params.get('heroes')) >= 1560) {
      setQuantity(4)
    } else if (Number(params.get('heroes')) <= 1560) {
      setQuantity(8)
    }

    const a = Number(params.get('heroes'))
    if (a > 1) {
      setAddNumber(a - 1)
    }

  }, [params.toString()])

  return (
    <>
      {!params.has('favorites') &&
        <S.Container>
          {Array(quantity).fill('')
            .map((_, i) => {
              return (
                <S.Button
                  key={i}
                  css={{
                    background: Number(params.get('heroes')) === (i + addNumber) ?
                      '$colors$secondary200' : '$secondary100'

                  }}

                  onClick={() => {
                    if (Number(total) > (i + addNumber) && i > 1) {
                      setAddNumber(i + (addNumber - 1))
                    }

                    if (i === 0 && addNumber > 1) {
                      setAddNumber(addNumber - 1)
                    }
                    router.push('/?heroes=' + (i + addNumber))
                  }}
                >
                  {i + addNumber}
                </S.Button>
              )
            })}
        </S.Container>
      }
    </>
  )
}