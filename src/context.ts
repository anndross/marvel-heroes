import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getHeroes } from './shared/marvel-api/get-heroes'
import { getHeroById } from './shared/marvel-api/get-hero-by-Id'
import { getComicsById } from './shared/marvel-api/get-comics-by-id'

interface HeroesStore {
  heroes: any
  total: string
  visibleHeroes: any[]
  heroById: any[]
  comicsById: any[]
  favorites: any[]
  setFavorites: (hero: any) => any
  setVisibleHeroes: (heroes: any[]) => void
  fetchHeroes: (offset?: number) => void
  fetchHeroById: (id: string) => void
  fetchComicsById: (id: string) => void 
}


export const useHeroesStore = create<HeroesStore>((set) => (
  {
      heroes: [],
      total: '',
      heroById: [],
      favorites: [],
      comicsById: [],
      visibleHeroes: [],
      setVisibleHeroes: (heroes: any[]) => (set({visibleHeroes: heroes})),
      setFavorites: (hero: any) =>
        set((state) => {
          if(state.favorites.some(e => e === hero)) {
            const favoritesCopy = state.favorites
            .filter(e => {
              return e.id !== hero.id
            })

            return { favorites: favoritesCopy }
          }
          return { favorites: [...state.favorites, hero] }
        }),
      fetchHeroes: async (offset?: number) => {
          const heroes = await getHeroes(offset)
          return set({ heroes: heroes?.results, total: heroes?.total })
      },
      fetchHeroById: async (id: string) => {
        const hero = await getHeroById(id)
        return set({ heroById: hero })
      },
      fetchComicsById: async (id: string) => {
        const comics = await getComicsById(id)
        return set({ comicsById: comics })
      },
    }
    )
)











// export const useHeroesStore = create<HeroesStore>()(
//   persist(
//     (set, get: any) => ({
//       heroes: [],
//       favorites: [],
//       setFavorites: (hero: any) =>
//         set((state) => ({ favorites: [...state.favorites, hero] })),
//       removeFavorites: (hero: any) => {
//         set(state => {
//           const favoritesCopy = state.favorites
//           .filter(e => {
//             return e.id !== hero.id
//           })

         
//           return { favorites: favoritesCopy }
//         })
//       },
//       fetch: async () => {
//         const stored = get().heroes
//         if (!stored.length) {
//           console.log('FETCHING HEROES')
//           const heroes = await getHeroes()
//           return set({ heroes: heroes })
//         }
//         console.log('LOCAL HEROES')
//         set({ heroes: stored })
//       },
//     }),
//     {
//       name: 'heroes-storage'
//     }
//   )
// )

