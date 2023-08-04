export const handleLoadHeroes = (
  fetchHeroes: (offset: number) => void,
  page: string,
  isSort = true
) => {
  const offset = 20
  const pageNumber = Number(page)

  if (!isSort) {
    const itemsCount = 1562
    const offset = 20 * pageNumber
    const lastPage = 79
    if (pageNumber === lastPage)
      fetchHeroes(itemsCount)
    else
      fetchHeroes(itemsCount - offset)

    return
  }

  fetchHeroes((pageNumber - 1) * offset)
}