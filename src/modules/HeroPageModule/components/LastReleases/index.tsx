import { Typography } from "@/components/typography"
import * as S from './styles'
import { useEffect, useState } from "react"
import axios from "axios"

interface Props {
  heroComics: any[]
}

export const LastReleases = ({ heroComics }: Props) => {
  const [lastComics, setLastComics] = useState([]) as any

  useEffect(() => {
    const fetchLastComics = async () => {
      try {
        const comics = heroComics?.map(async e => {
          const response = axios.get(e.resourceURI, {
            params: {
              ts: process.env.NEXT_PUBLIC_TS,
              apikey: process.env.NEXT_PUBLIC_API_KEY,
              hash: process.env.NEXT_PUBLIC_HASH
            }
          })
          return response
        })
        const comicsLoaded = await Promise.all(comics)
        setLastComics(comicsLoaded)
      } catch (error) {
        console.error(error)
      }
    }

    fetchLastComics()

  }, [heroComics])

  return (
    <S.Container>
      <Typography color='primary' size='large' weight='bold'>
        Últimos lançamentos
      </Typography>
      <S.LastReleases>
        {lastComics?.map((e: any) => {
          return (
            <S.ComicCard key={e.data.data.results[0]?.id}>
              <img src={e.data.data.results[0].thumbnail?.path + '.' + e.data.data.results[0].thumbnail?.extension} alt="" />
              <Typography color='primary' size='medium'>
                {e.data.data.results[0]?.title}
              </Typography>
            </S.ComicCard>
          )
        })}
      </S.LastReleases>
    </S.Container>
  )
}