import { Favorite } from "@/components/Favorite"
import { Typography } from "@/components/Typography"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export const ShowFavorites = () => {
    const [lastQuery, setLastQuery] = useState('heroes=1')
    const router = useRouter()
    const params = useSearchParams()

    return (
        <div>
            <Favorite
                isFavorite={params.has('favorites')}
                onFavorite={() => {
                    const isFavoritePage = params.has('favorites')

                    if (!isFavoritePage) {
                        setLastQuery(params.toString())
                        router.push('/?favorites')
                    } else
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