import { Typography } from "@/components/Typography"
import * as S from './styles'
import { useEffect, useState } from "react"
import axios from "axios"
import { useHeroesStore } from "@/context"

interface Props {
  id: string
}

export const LastReleases = ({ id }: Props) => {
  const heroesContext = useHeroesStore()

  useEffect(() => {
    heroesContext.fetchComicsById(id)
  }, [heroesContext.fetchComicsById])

  return (
    <S.Container>
      <Typography color='primary' size='large' weight='bold'>
        Últimos lançamentos
      </Typography>
      <S.LastReleases>
        {heroesContext.comicsById?.map((e: any) => {
          return (
            <S.ComicCard key={e.id}>
              <img src={e.thumbnail.path + '.' + e.thumbnail.extension} alt="" height={120} />
              <Typography color='primary' size='small'>
                {e.title}
              </Typography>
            </S.ComicCard>
          )
        })}
      </S.LastReleases>
    </S.Container>
  )
}