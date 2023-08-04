import { useEffect, useState, useMemo, useCallback } from 'react'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { useRouter, useSearchParams } from 'next/navigation'

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, idx) => idx + start);

export const Pagination: React.FC = () => {
  const { has: hasPage, get: getPage } = useSearchParams()
  const { total: totalItems } = useHeroesStore()

  const router = useRouter()
  const numPaginationButtons = 6
  const [paginationRange, setPaginationRange] = useState<[number, number]>([1, numPaginationButtons])
  const itemsPerPage = 20
  const currentPage = Number(getPage('heroes'))

  const totalPages = useMemo(() => Math.ceil(Number(totalItems) / itemsPerPage), [totalItems, itemsPerPage]);


  const setPaginationRangeWhenIsLastPage = useCallback(() => {
    if (currentPage === totalPages) {
      setPaginationRange([totalPages, totalPages])
    }
  }, [currentPage, totalPages]);


  const setPaginationRangeToButtons = useCallback(() => {
    if (currentPage > numPaginationButtons) {
      const rest = currentPage % numPaginationButtons
      const start = currentPage - (rest !== 0 ? rest - 1 : numPaginationButtons - 1)
      const end = currentPage - rest + numPaginationButtons
      setPaginationRange([start, end])
    }
  }, [currentPage, numPaginationButtons]);



  useEffect(() => {
    setPaginationRangeWhenIsLastPage()
    setPaginationRangeToButtons()
  }, [getPage('heroes'), setPaginationRangeWhenIsLastPage, setPaginationRangeToButtons])



  const handlePrevButtonClick = useCallback(() => {
    if (paginationRange[0] > numPaginationButtons) {
      setPaginationRange([paginationRange[0] - numPaginationButtons, paginationRange[1] - numPaginationButtons])
    }
    if (paginationRange[0] === numPaginationButtons) {
      setPaginationRange([paginationRange[0] - (numPaginationButtons - 1), paginationRange[1] - numPaginationButtons])
    }
    if (paginationRange[1] === totalPages) {
      setPaginationRange([73, 78])
    }
  }, [paginationRange, numPaginationButtons, totalPages]);



  const handleNextButtonClick = useCallback(() => {
    if (paginationRange[1] <= 72) {
      setPaginationRange([paginationRange[0] + numPaginationButtons, paginationRange[1] + numPaginationButtons])
    }
    if (paginationRange[1] === 78) {
      setPaginationRange([totalPages, totalPages])
    }
  }, [paginationRange, numPaginationButtons, totalPages]);



  const paginationButtons = useMemo(() => range(paginationRange[0], paginationRange[1]), [paginationRange]);



  return (
    <>
      {hasPage('heroes') && (
        <S.Container>
          <S.NextPrevButton
            css={{ visibility: paginationRange[0] === 1 ? 'hidden' : 'visible' }}
            onClick={handlePrevButtonClick}
          >
            {'<'}
          </S.NextPrevButton>
          {paginationButtons.map((pageNumber) => {
            const isSelectedButton = currentPage === pageNumber

            return (
              <S.Button
                key={pageNumber}
                css={{ background: isSelectedButton ? '$secondary200' : '$secondary100' }}
                onClick={() => router.push('?heroes=' + pageNumber)}
              >
                {pageNumber}
              </S.Button>
            )
          })}
          <S.NextPrevButton
            css={{ visibility: paginationRange[1] === 79 ? 'hidden' : 'visible' }}
            onClick={handleNextButtonClick}
          >
            {'>'}
          </S.NextPrevButton>
        </S.Container>
      )}
    </>
  )
}