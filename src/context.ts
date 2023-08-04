import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getHeroes } from './shared/marvel-api/get-heroes'
import { getHeroById } from './shared/marvel-api/get-hero-by-Id'
import { getComicsById } from './shared/marvel-api/get-comics-by-id'
import { Hero } from './interfaces/HeroInterface'
import { Comics } from './interfaces/ComicsInterface'

interface HeroesStore {
  visible: Hero[]
  total: string
  heroes: Hero[]
  isSort: boolean
  favorites: Hero[]
  hero: [Hero]
  reviews: { [id: string]: number }
  comics: Comics[]
  setIsSort: (isSort: boolean) => void
  setReviews: (review: HeroesStore['reviews']) => void
  setFavorites: (favorites: Hero[]) => void
  setVisible: (visibles: Hero[]) => void
  fetchHeroes: (offset: number) => void
  fetchHeroById: (id: string) => void
  fetchComicsById: (id: string) => void
}

export const useHeroesStore = create<HeroesStore>()(
  persist(
    (set, get: any) => ({
      visible: [],
      total: '',
      isSort: true,
      heroes: [],
      reviews: {},
      favorites: [],
      hero: [{} as Hero],
      comics: [],
      setIsSort: (isSort: boolean) => set({ isSort: isSort }),
      setReviews: (reviews: HeroesStore['reviews']) => set({ reviews: reviews }),
      setFavorites: (favorites: Hero[]) => set({ favorites: favorites }),
      setVisible: (visible: Hero[]) => set({ visible: visible }),
      fetchHeroes: async (offset: number) => {
        const heroesStored: Hero[] = get().heroes
        const heroes = await getHeroes(offset)
        if (heroesStored.length && heroesStored.some((e, i) => e.id !== heroes?.results[i].id)) {
          set({ heroes: heroes?.results })
        } else if (!heroesStored.length) {
          set({ total: heroes?.total, heroes: heroes?.results })
        } else {
          set({ heroes: heroesStored })
        }
      },
      fetchHeroById: async (id: string) => {
        const hero = await getHeroById(id)
        set({ hero: hero })
      },
      fetchComicsById: async (id: string) => {
        const comics = await getComicsById(id)
        return set({ comics: comics })
      },
    }),
    {
      name: 'heroes-storage'
    }
  ))
