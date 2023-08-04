import { Typography } from '../Typography'
import * as S from './styles'

export const Logo = () => {
  return (
    <S.Container>
      <img src="../assets/logo/marvel.png" alt="marvel" height={60} />
      <Typography color='primary' size='small' weight='bold'>
        Search heroes
      </Typography>
    </S.Container>
  )
}