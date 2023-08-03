import { useEffect, useState } from 'react'
import * as S from './styles'

interface Props {
  onFavorite?: () => void
  height?: number
  isFavorite: boolean
}

export const Favorite = ({ onFavorite, height = 16, isFavorite }: Props) => {
  const [favorite, setFavorite] = useState(isFavorite)

  const iconURL = !favorite
    ? 'heart1.png' : 'heart2.png'

  useEffect(() => {
    setFavorite(isFavorite)
  }, [isFavorite])

  return (
    <S.HeartIcon
      onClick={() => {
        setFavorite(!favorite)
        onFavorite && onFavorite()
      }}
      src={`../assets/icones/heart/${iconURL}`}
      height={height}
      alt='heart'
    />
  )
}