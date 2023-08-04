import { Logo } from '@/components/Logo'
import { SearchBar } from '../../components/SearchBar'
import { Typography } from '../../components/Typography'
import { Heroes } from './components/Heroes'
import * as S from './styles'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useHeroesStore } from '@/context'
import { Pagination } from './components/Pagination'
import { Actions } from './components/Actions'
import { Favorites } from './components/Favorites'
import { handleLoadHeroes } from '@/utils/handleLoadHeroes'

export const HomeModule = () => {
  const { get: getPage, has: hasPage } = useSearchParams()
  const { fetchHeroes, isSort } = useHeroesStore()

  useEffect(() => {
    const page = Number(getPage('heroes'))
    if (page > 1 && page <= 79) {
      handleLoadHeroes(fetchHeroes, getPage('heroes') ?? '1', isSort)
      console.log(isSort)
    }
  }, [getPage('heroes'), isSort])

  return (
    <S.Container>
      <Logo />
      <div className='text-container'>
        <Typography color='primary' size='large' weight='bold'>
          EXPLORE O UNIVERSO
        </Typography>
        <Typography color='secondary' size='small' weight='lighter'>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
        </Typography>
      </div>
      <SearchBar />
      <Actions />
      <S.Grid>
        {hasPage('heroes') ? <Heroes /> : hasPage('favorites') && <Favorites />}
      </S.Grid>
      <Pagination />
    </S.Container>
  )
}