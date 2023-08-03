import * as S from './styles'
import { useHeroesStore } from "@/context"
import { Name } from "./components/Name"
import { Description } from "./components/Description"
import { Collection } from "./components/Collection"
import { Rating } from "./components/Rating"
import { LastComic } from "./components/LastComic"
import { useEffect, useState } from 'react'
import { Character } from './components/Character'

export const Information = () => {

  return (
    <S.Container>
      <S.Description>
        <Name />
        <Description />
        <Collection />
        <Rating />
        <LastComic />
      </S.Description>
      <Character />
    </S.Container>
  )
}