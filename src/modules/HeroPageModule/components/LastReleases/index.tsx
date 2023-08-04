import { Typography } from "@/components/Typography"
import * as S from './styles'
import { useEffect, useState } from "react"
import { useHeroesStore } from "@/context"
import { ComicSkeleton } from "./ComicSkeleton"
import { Comics } from "@/interfaces/ComicsInterface"


export const LastReleases = () => {
  const { comics } = useHeroesStore()
  const [comicsData, setComicsData] = useState<Comics[]>([])

  useEffect(() => {
    setComicsData(comics)
  }, [comics])

  return (
    <S.Container>
      <Typography color='primary' size='large' weight='bold'>
        Últimos lançamentos
      </Typography>
      <S.LastReleases>
        {!comicsData.length ?
          Array(10).fill('').map((_, i) => {
            return (
              <ComicSkeleton key={i} />
            )
          })
          :
          comicsData?.map((e: any) => {
            return (
              <S.ComicCard key={e.id}>
                <img src={e.thumbnail.path + '.' + e.thumbnail.extension} alt="comic" height={120} />
                <Typography color='primary' size='small'>
                  {e.title}
                </Typography>
              </S.ComicCard>
            )
          })
        }
      </S.LastReleases>
    </S.Container>
  )
}