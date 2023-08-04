import { useHeroesStore } from "@/context"
import { useEffect } from "react"
import { Card } from "../Card"
import { NoFavorites } from "./NoFavorites"
import { useSearchParams } from "next/navigation"

export const Favorites = () => {
  const { visible, setVisible, favorites } = useHeroesStore()

  useEffect(() => {
    if (favorites.length)
      setVisible(favorites)
  }, [favorites])

  return (
    <>
      {favorites.length
        ?
        visible.map(hero => <Card key={hero.id} hero={hero} />)
        :
        <NoFavorites />
      }
    </>
  )
}