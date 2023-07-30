import { Typography } from '../../../../components/typography'
import { Filters } from './filters'
import * as S from './styles'

export const Actions = () => {
  return (
    <S.Container>
      <Typography color='secondary' size='medium'>
        Encontrados 20 heróis
      </Typography>
      <Filters />
    </S.Container>
  )
}