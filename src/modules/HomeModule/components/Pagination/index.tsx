import { useState } from 'react'
import * as S from './styles'
import { useHeroesStore } from '@/context'
import { useRouter, useSearchParams } from 'next/navigation'

export const Pagination = () => {
  const [addNumber, setAddNumber] = useState(1)
  const router = useRouter()
  const params = useSearchParams()
  const {total} = useHeroesStore()

  return (
    <S.Container>
      {Array(8).fill('')
        .map((_, i) => {
          return (
            <S.Button 
              css={{...(Number(params.get('heroes')) === (i + addNumber) 
              && {background: '#8C8C8C'}
              )}}
              
              onClick={() => {
                if(Number(total) >= (i + addNumber) && i > 1) {
                  setAddNumber(i + (addNumber -1))
                }
                  
                if(i === 0 && addNumber > 1) {
                  setAddNumber(addNumber -1)
                }
                router.push('/?heroes=' + (i + addNumber))
              }}
            >
              {i + addNumber}
            </S.Button>
          )
      })}
    </S.Container>
  )
}