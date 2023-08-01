import * as S from './styles'
import { useState } from "react"

interface Props {
    onFavorite?:  () => void
    height?: number
    favoriteMethods: {
      setIsFavorite: (isFavorite: boolean) => void
      isFavorite: boolean
    }
}

export const Favorite = ({onFavorite, height = 16, favoriteMethods}: Props) => {

    const iconURL = !favoriteMethods.isFavorite
     ? 'heart1.png' : 'heart2.png'
     
    return (
        <S.HeartIcon
          onClick={() => {
            favoriteMethods.setIsFavorite(!favoriteMethods.isFavorite)
            onFavorite && onFavorite()
          }}
          src={`../assets/icones/heart/${iconURL}`}
          height={height}
          alt='heart'
        />
    )
}