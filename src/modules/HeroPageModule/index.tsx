import { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import { Logo } from '@/components/logo'
import { SearchBar } from '@/components/searchBar'
import { Description } from './components/description'
import { LastReleases } from './components/LastReleases'
interface Props {
  id: string
}

export const HeroPageModule = ({ id }: Props) => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}`
  const [hero, setHero] = useState<any>([])

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            ts: process.env.NEXT_PUBLIC_TS,
            apikey: process.env.NEXT_PUBLIC_API_KEY,
            hash: process.env.NEXT_PUBLIC_HASH
          }
        })
        setHero(response.data.data.results)
      } catch (error) {
        console.error(error);
      }
    }
    fetchHero()
  }, [])

  return (
    <S.Container>
      <S.Header>
        <Logo />
        <SearchBar variant="secondary" />
      </S.Header>
      <S.Information>
        <Description hero={hero} />
        <LastReleases heroComics={hero[0]?.comics?.items} />
      </S.Information>
    </S.Container>
  )
}