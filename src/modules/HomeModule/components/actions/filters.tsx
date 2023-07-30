import { ToggleButton } from '../../../../components/toggleButton'
import { Typography } from '../../../../components/typography'
import * as S from './styles'

export const Filters = () => {
  return (
    <S.FiltersContainer>
      <img src='assets/icones/heroi/hero.png' height={26} />
      <Typography size="medium">
        Ordenar por nome - A/Z
      </Typography>
      <div style={{ margin: '0 16px' }}>
        <ToggleButton />
      </div>
      <img src='assets/icones/heart/heart1.png' height={20} />
      <Typography size="medium">
        Somente favoritos
      </Typography>
    </S.FiltersContainer>
  )
}