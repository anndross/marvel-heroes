import * as S from './styles'

interface Props {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

export const ToggleButton = ({toggle, setToggle}: Props) => {

  return (
    <S.Container 
      css={{backgroundColor: toggle ? '$primary200' : '$secondary100'}} 
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <S.Ball css={{transform: toggle ? 'translateX(130%)' : 'none'}} />
    </S.Container>
  )
}