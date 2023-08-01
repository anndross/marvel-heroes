import { Favorite } from "@/components/Favorite"
import { Typography } from "@/components/Typography"
import { useHeroesStore } from "@/context"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const ShowFavorites = ()=> {
    const [isFavorite, setIsFavorite] = useState(false)
    const [lastQuery, setLastQuery] = useState('heroes=1')

    const router = useRouter()
    const params = useSearchParams()
    const {
        favorites,
        setVisibleHeroes
    } = useHeroesStore()

    const updateFavoritesInFavoritesPage = () => {
        if(params.has('favorites')) {
            setVisibleHeroes(favorites)
        }
    }
    
    useEffect(() => {
        updateFavoritesInFavoritesPage()
    }, [favorites])

    return (
        <div>
            <Favorite
                favoriteMethods={{isFavorite, setIsFavorite}}
                onFavorite={() => {
                    if(!params.has('favorites')) {
                        setLastQuery(params.toString())
                        router.push('/?favorites')
                    }
                    else 
                        router.push('/?' + lastQuery)
                }}
                height={20}
            />
            <Typography size="medium">
              Somente favoritos
            </Typography>
          </div>
    )
}