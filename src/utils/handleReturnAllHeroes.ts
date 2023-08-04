import { Hero } from "@/interfaces/HeroInterface"
import { Heroes } from "@/interfaces/HeroesInterface"

export const handleReturnAllHeroes = (
  data: Heroes[]
): Hero[] => {
  const flatData = data.map(e => {
    return e[Object.keys(e) as any]
  }).flat()

  return flatData
}