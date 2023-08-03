import { Typography } from '@/components/Typography'
import * as S from '../styles'
import { format } from 'date-fns'
import { useHeroesStore } from '@/context'
import { useEffect, useState } from 'react'
import { Comics } from '@/interfaces/ComicsInterface'


export const LastComic = () => {
  const { comics } = useHeroesStore()
  const [comicsData, setComicsData] = useState<Comics[]>([])

  useEffect(() => {
    setComicsData(comics)
  }, [comics])

  return (
    <S.LastComic>
      <Typography color='primary' size='medium' weight='lighter'>
        Último quadrinho:
      </Typography>
      <Typography color='primary' size='medium' weight='lighter'>
        {comicsData.length && format(new Date(comicsData[0]?.dates[0].date), 'dd MMM yyyy')}
      </Typography>
    </S.LastComic>
  )
}