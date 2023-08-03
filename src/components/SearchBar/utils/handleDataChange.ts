import { Hero } from "@/interfaces/HeroInterface";
import { Heroes } from "@/interfaces/HeroesInterface";

export const handleDataChange = (data: Heroes[], setList: (list: Hero[]) => void) => {
  const flatData = data.map(e => {
    return e[Object.keys(e) as any]
  }).flat()

  setList(flatData)
}