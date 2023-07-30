import { SearchBar } from '../../components/searchBar'
import { Typography } from '../../components/typography'
import { Actions } from './components/actions'
import { Heroes } from './components/heroes'
import * as S from './styles'

export const HomeModule = () => {
  return (
    <S.Container>
      <div className='text-container'>
        <img src="assets/logo/Group.png" height={100} />
        <Typography color='primary' size='large' weight='bold'>
          EXPLORE O UNIVERSO
        </Typography>
        <Typography color='secondary' size='small' weight='lighter'>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
        </Typography>
      </div>
      <SearchBar />
      <Actions />
      <Heroes />
    </S.Container>
  )
}