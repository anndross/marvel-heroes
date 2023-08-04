import { useEffect } from 'react'
import * as S from './styles'
import { Logo } from '@/components/Logo'
import { SearchBar } from '@/components/SearchBar'
import { Information } from './components/Information'
import { LastReleases } from './components/LastReleases'
import { useHeroesStore } from '@/context'

interface Props {
  id: string
}

export const HeroPageModule = ({ id }: Props) => {
  const { fetchHeroById, fetchComicsById } = useHeroesStore()

  useEffect(() => {
    fetchHeroById(id)
  }, [fetchHeroById, id])

  useEffect(() => {
    fetchComicsById(id)
  }, [fetchComicsById, id])

  return (
    <S.Container>
      <S.Header>
        <div>
          <Logo />
          <SearchBar variant="secondary" />
        </div>
      </S.Header>
      <S.Information>
        <Information />
        <LastReleases />
      </S.Information>
    </S.Container>
  )
}