import { useEffect, useState } from 'react'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { useRouter, useSearchParams } from 'next/navigation'

export const Pagination = () => {
  const { has: hasPage, get: getPage } = useSearchParams()
  const router = useRouter()
  const { total } = useHeroesStore()
  const quantityOfItemsPerPage = 20
  const quantityOfPages = (Number(total) - 2) / quantityOfItemsPerPage
  const [buttonPageValue, setButtonPageValue] = useState(1)
  const quantityOfButtons = buttonPageValue < 6 ? 6 : 7

  useEffect(() => {
    const page = Number(getPage('heroes'))
    if (page > 6 && page <= quantityOfPages) {
      const rest = page % 6

      rest === 0 ? setButtonPageValue(page - 6) : setButtonPageValue(page - rest)
    }

  }, [getPage('heroes')])

  const onClick = (i: number) => {
    const buttonValue = buttonPageValue + i
    const subButtonValue = buttonValue === 6 ? 5 : 6

    if (buttonValue % 6 === 0 && buttonValue <= quantityOfPages) setButtonPageValue(buttonValue)
    if (buttonValue === buttonPageValue && buttonValue >= 6) setButtonPageValue(buttonValue - subButtonValue)


    router.push('/?heroes=' + (buttonPageValue + i))
  }

  return (
    <>
      {hasPage('heroes') &&
        <S.Container>
          {Array(quantityOfButtons).fill('').map((_, i) => {
            const value = buttonPageValue + i

            return (
              <S.Button key={i} onClick={() => onClick(i)}>
                {value}
              </S.Button>
            )
          })}
        </S.Container>
      }
    </>
  )
}