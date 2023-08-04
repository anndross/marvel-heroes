import { useHeroesStore } from '@/context'
import * as S from './styles'
import { useEffect, useRef, useState } from 'react'
import { handleCloseByOutsideClick } from './utils/handleCloseByOutsideClick'
import { handleSearch } from './utils/handleSearch'
import { HeroesList } from './HeroesList'
import { handleDataChange } from './utils/handleDataChange'
import { Hero } from '@/interfaces/HeroInterface'
import { handleLoadHeroes } from '@/utils/handleLoadHeroes'

interface Props {
  variant?: 'primary' | 'secondary'
}

export const SearchBar = ({ variant = 'primary' }: Props) => {
  const ref = useRef(null)
  const { fetchHeroes, heroes } = useHeroesStore()
  const [list, setList] = useState<Hero[]>([])
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    handleCloseByOutsideClick(ref, setShowList)
  }, [ref])

  useEffect(() => {
    if (!heroes.length)
      handleLoadHeroes(fetchHeroes, '1')
  }, [heroes])

  useEffect(() => {
    handleDataChange(heroes, setList)
  }, [heroes])

  return (
    <S.Container ref={ref} >
      <S.SearchBar variant={variant}>
        <S.Icon src='../assets/busca/Lupa/Shape.png' />
        <S.Input
          onClick={() => {
            setShowList(true)
          }}
          onChange={(e) => handleSearch(
            e.target.value,
            heroes,
            setList
          )}
          placeholder="Procure por heróis"
        />
      </S.SearchBar>
      {showList && <HeroesList variant={variant} list={list} />}
    </S.Container>
  )
}