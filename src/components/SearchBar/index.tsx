import { useHeroesStore } from '@/context'
import * as S from './styles'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Typography } from '../Typography'

interface Props {
  variant?: 'primary' | 'secondary'
}

export const SearchBar = ({ variant = 'primary' }: Props) => {
  const heroesContext = useHeroesStore()
  const [searchHero, setSearchHero] = useState([]) as any
  const [onFocus, setOnFocus] = useState(false) 
  const router = useRouter() 


  const url = variant === 'secondary' ? '../assets/busca/Lupa/Shape.png' : 'assets/busca/Lupa/Shape.png'

  useEffect(() => {
    setSearchHero(heroesContext.heroes)
  }, [heroesContext.heroes])

  const ref = useRef(null) as any

  const handleCloseByOutsideClick = (ref: any, setClose: (b: boolean) => void) => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClose(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  useEffect(() => {
    handleCloseByOutsideClick(ref, setOnFocus)
  }, [ref])

  useEffect(() => {
    if(!heroesContext.heroes.length) {
      heroesContext.fetchHeroes()
    }
  }, [heroesContext.fetchHeroes])

  return (
    <S.Container ref={ref} >
      <S.SearchBar variant={variant}>
        <S.Icon src={url} />
        <S.Input 
          onFocus={() => {
            setOnFocus(true)
          }}
          onChange={(e: any) => {
            let value = e.target.value
            if (value && value.trim().length > 0){
               value = value.trim().toLowerCase()
               setSearchHero(heroesContext.heroes.filter((hero: any) => {
                const lowerCaseHero = hero.name.trim().toLowerCase()
                return lowerCaseHero.includes(value)
              }))
            } 
            if(value == '') {
              setSearchHero(heroesContext.heroes)
            }
          }}
          placeholder="Procure por heróis"
        />
      </S.SearchBar>
      <S.SearchedList variant={variant} css={{display: onFocus ? 'block' : 'none'}}>
          {searchHero
            ?.map((e: any) => {
                return (
                  <li onClick={() => {
                    router.push('/' + e.id)
                  }}>
                    <img src={e.thumbnail.path + '.' + e.thumbnail.extension} alt="" height={50}/>
                    <Typography>
                      {e.name}
                    </Typography>
                </li>
              )
            })
          }
      </S.SearchedList>
    </S.Container>
  )
}