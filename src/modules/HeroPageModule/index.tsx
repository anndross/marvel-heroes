import { useEffect } from 'react'
import * as S from './styles'
import { Logo } from '@/components/Logo'
import { SearchBar } from '@/components/SearchBar'
import { Description } from './components/Description'
import { LastReleases } from './components/LastReleases'
import { useHeroesStore } from '@/context'
interface Props {
  id: string
}

export const HeroPageModule = ({ id }: Props) => {
  const heroesContext = useHeroesStore()

  useEffect(() => {
    heroesContext.fetchHeroById(id)
  }, [heroesContext.fetchHeroById])

  return (
    <S.Container>
      <S.Header>
        <div>
          <Logo />
          <SearchBar variant="secondary" />
        </div>
      </S.Header>
      <S.Information>
        <Description/>
        <LastReleases id={id} />
      </S.Information>
    </S.Container>
  )
}