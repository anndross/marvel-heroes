import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getHeroes } from './shared/marvel-api/get-heroes'
import { getHeroById } from './shared/marvel-api/get-hero-by-Id'
import { getComicsById } from './shared/marvel-api/get-comics-by-id'
import { Hero } from './interfaces/HeroInterface'
import { Comics } from './interfaces/ComicsInterface'
import { Heroes } from './interfaces/HeroesInterface'

interface HeroesStore {
  visible: Hero[]
  total: string
  heroes: Heroes[]
  hero: [Hero]
  comics: Comics[]
  setVisible: (visibles: Hero[]) => void
  updateHeroes: (heroes: HeroesStore['heroes']) => void
  fetchHeroes: (offset: number, page: string) => void
  fetchHeroById: (id: string) => void
  fetchComicsById: (id: string) => void
}

export const useHeroesStore = create<HeroesStore>()(
  persist(
    (set, get: any) => ({
      visible: [],
      total: '',
      heroes: [],
      hero: [{} as Hero],
      comics: [],
      setVisible: (visible: Hero[]) => set({ visible: visible }),
      updateHeroes: (heroes: HeroesStore['heroes']) => set({ heroes: heroes }),
      fetchHeroes: async (offset: number, page: string) => {
        const heroesStorage: HeroesStore['heroes'] = get().heroes
        const heroes = await getHeroes(offset)

        if (heroes?.results) {
          if (!heroesStorage.length) {
            return set({
              total: heroes.total,
              heroes: [{ [page]: heroes.results }]
            })
          }
          else if (!heroesStorage.some((e) => Object.keys(e)[0] === page)) {
            return set((state) => ({
              heroes: [...state.heroes, { [page]: heroes.results }]
            }))
          } else {
            return set({
              heroes: [...heroesStorage]
            })
          }
        }
      },
      fetchHeroById: async (id: string) => {
        const updateHero = async (heroes: Heroes[], id: string) => {
          let hero: [Hero] = [{} as Hero]


          heroes.forEach(async (object: any) => {
            const key = Object.keys(object)[0];
            const objectArrays = object[key];

            const foundObject = objectArrays.find((obj: any) => obj.id == id);
            if (foundObject) {
              hero = [foundObject]
            }
          });

          if (hero[0].id === undefined) {
            const heroById = await getHeroById(id) || [] as Hero[]
            hero = [{
              ...heroById[0],
              review: 0,
              isFavorite: false
            }]

            return hero
          }

          return hero;
        }

        const hero = await updateHero(get().heroes, id)

        return set({ hero: hero })
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
