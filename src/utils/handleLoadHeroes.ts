export const handleLoadHeroes = (
  fetchHeroes: (offset: number, page: string) => void,
  page: string,
  isSort = true
) => {
  const offset = 20
  const pageNumber = Number(page)

  if (!isSort) {
    const itemsCount = 1562
    const offset = 20 * pageNumber

    fetchHeroes(itemsCount - offset, page)
    return
  }

  fetchHeroes((pageNumber - 1) * offset, page)
}