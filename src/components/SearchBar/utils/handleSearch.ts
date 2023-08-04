import { Hero } from "@/interfaces/HeroInterface"

export const handleSearch = (
  typedValue: string,
  list: Hero[],
  setList: (list: Hero[]) => void
) => {

  const formattedTypedValue = typedValue.toLowerCase().trim()

  const searchedList = list.filter(hero => {
    const formattedHeroName = hero.name.toLocaleLowerCase().trim()

    return formattedHeroName.includes(formattedTypedValue)
  })

  setList(searchedList)

  if (typedValue === '') {
    setList(list)
  }
}