import { useEffect, useMemo, useState } from 'react'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { useRouter, useSearchParams } from 'next/navigation'

const range = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export const Pagination = () => {
  const { has: hasPage, get: getPage } = useSearchParams()
  const router = useRouter()
  const buttonPagesNumber = 6
  const lastPage = 79

  const [startEnd, setStartEnd] = useState([1, buttonPagesNumber])

  useEffect(() => {
    const page = Number(getPage('heroes'))
    if (page === lastPage) {
      setStartEnd([lastPage, lastPage])
      return
    }
    if (page > 6) {
      const rest = page % buttonPagesNumber
      rest !== 0 ?
        setStartEnd([page - rest + 1, (page - rest) + buttonPagesNumber])
        :
        setStartEnd([page - (buttonPagesNumber - 1), page])
    }
  }, [getPage('heroes')])

  return (
    <>
      {hasPage('heroes') &&
        <S.Container>
          <S.NextPrevButton
            onClick={() => {
              if (startEnd[0] > buttonPagesNumber)
                setStartEnd([startEnd[0] - buttonPagesNumber, startEnd[1] - buttonPagesNumber])
              if (startEnd[0] === buttonPagesNumber)
                setStartEnd([startEnd[0] - (buttonPagesNumber - 1), startEnd[1] - buttonPagesNumber])
              if (startEnd[1] === lastPage)
                setStartEnd([73, 78])
            }}
          >
            {'<'}
          </S.NextPrevButton>
          {range(startEnd[0], startEnd[1]).map((e) => {
            return (
              <S.Button
                css={{ background: Number(getPage('heroes')) === e ? '$secondary200' : '$secondary100' }}
                onClick={() => router.push('?heroes=' + e)}
              >
                {e}
              </S.Button>
            )
          })}
          <S.NextPrevButton
            onClick={() => {
              if (startEnd[1] <= 72)
                setStartEnd([startEnd[0] + buttonPagesNumber, startEnd[1] + buttonPagesNumber])
              if (startEnd[1] === 78) {
                setStartEnd([lastPage, lastPage])
              }
            }}
          >
            {'>'}
          </S.NextPrevButton>
        </S.Container>
      }
    </>
  )
}