import { Hero } from "@/interfaces/HeroInterface"
import { Heroes } from "@/interfaces/HeroesInterface"

export const handleSearch = (
  typedValue: string,
  list: Heroes[],
  setList: (list: Hero[]) => void
) => {
  const flatData = list.map(e => {
    return e[Object.keys(e) as any]
  }).flat()

  const formattedTypedValue = typedValue.toLowerCase().trim()
  console.log(list)
  const searchedList = flatData.filter(hero => {
    const formattedHeroName = hero.name.toLocaleLowerCase().trim()

    return formattedHeroName.includes(formattedTypedValue)
  })

  setList(searchedList)

  if (typedValue === '') {
    setList(flatData)
  }
}