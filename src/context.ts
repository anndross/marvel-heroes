import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getHeroes } from './shared/marvel-api/get-heroes'

interface HeroesStore {
  heroes: any[],
  favorites: any[],
  setFavorites: (hero: any) => any
  removeFavorites: (hero: any) => any

  fetch: () => void
}

export const useHeroesStore = create<HeroesStore>()(
  persist(
    (set, get: any) => ({
      heroes: [],
      favorites: [],
      setFavorites: (hero: any) =>
        set((state) => ({ favorites: [...state.favorites, hero] })),
      removeFavorites: (hero: any) => {
        set(state => {
          const favoritesCopy = [...state.favorites]
          const index = favoritesCopy.indexOf(hero)
          console.log('asdasa')
          favoritesCopy.splice(index, 1)
          return { favorites: favoritesCopy }
        })
      },
      fetch: async () => {
        const stored = get().heroes
        if (!stored.length) {
          console.log('FETCHING HEROES')
          const heroes = await getHeroes()
          return set({ heroes: heroes })
        }
        console.log('LOCAL HEROES')
        set({ heroes: stored })
      },
    }),
    {
      name: 'heroes-storage'
    }
  )
)

