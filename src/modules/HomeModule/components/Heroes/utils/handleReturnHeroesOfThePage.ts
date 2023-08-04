import { Heroes } from "@/interfaces/HeroesInterface"

interface Props {
  heroes: Heroes[]
  page: string
}

export const handleReturnHeroesOfThePage = (props: Props) => {
  const heroesByPage = props.heroes.filter(e => {
    return Object.keys(e)[0] === props.page
  })

  return heroesByPage[0]?.[props.page]
}