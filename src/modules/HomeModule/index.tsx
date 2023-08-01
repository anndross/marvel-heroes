import { Logo } from '@/components/Logo'
import { SearchBar } from '../../components/SearchBar'
import { Typography } from '../../components/Typography'
import { Heroes } from './components/Heroes'
import * as S from './styles'

export const HomeModule = () => {

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
      <Heroes />
    </S.Container>
  )
}