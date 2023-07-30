import { Typography } from '../typography'
import * as S from './styles'

export const Logo = () => {
  return (
    <S.Container>
      <img src="../assets/logo/marvel.png" alt="" height={'100%'} />
      <Typography color='primary' size='medium' weight='bold'>
        Search heroes
      </Typography>
    </S.Container>
  )
}