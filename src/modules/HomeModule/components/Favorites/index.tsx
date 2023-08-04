import { useHeroesStore } from "@/context"
import { handleReturnAllHeroes } from "@/utils/handleReturnAllHeroes"
import { useEffect } from "react"
import { Card } from "../Card"
import { NoFavorites } from "./NoFavorites"

export const Favorites = () => {
  const { visible, setVisible, heroes } = useHeroesStore()

  useEffect(() => {
    const data = handleReturnAllHeroes(heroes)
    const favorites = data.filter(e => e.isFavorite)

    setVisible(favorites)
  }, [heroes])

  return (
    <>
      {!visible.length
        ?
        <NoFavorites />
        :
        visible.map(hero => <Card key={hero.id} hero={hero} />)
      }
    </>
  )
}