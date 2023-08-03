import { Hero } from "@/interfaces/HeroInterface"
import { Heroes } from "@/interfaces/HeroesInterface"

export const handleLoadDataWhenIsFavoritesPage = (
  data: Heroes[]
): Hero[] => {
  const flatData = data.map(e => {
    return e[Object.keys(e) as any]
  }).flat()

  const favorites = flatData.filter((e) => {
    return e.isFavorite
  })

  return favorites
}