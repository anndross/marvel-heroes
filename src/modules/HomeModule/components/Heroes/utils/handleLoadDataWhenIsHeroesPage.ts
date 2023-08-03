import { Hero } from "@/interfaces/HeroInterface"

export const handleLoadDataWhenIsHeroesPage = (
  fetchHeroes: (offset: number, page: string) => void,
  page: string
) => {
  const offset = 20
  const pageNumber = Number(page)

  fetchHeroes((pageNumber - 1) * offset, page)
}