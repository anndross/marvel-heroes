import { Typography } from "@/components/Typography"
import { ToggleButton } from "../toggleButton"
import { useEffect, useState } from "react"
import { useHeroesStore } from "@/context";
import { sortHeroesAlphabetically } from "@/utils/handleSortHeroesAlphabetically";

export const SortHeroes = () => {
    const { visible, setVisible } = useHeroesStore()

    const [isSort, setIsSort] = useState(true)

    useEffect(() => {
        const sequence = isSort ? 'a-z' : 'z-a'
        const sortedData = sortHeroesAlphabetically(visible, sequence)
        setVisible(sortedData)
    }, [isSort])

    return (
        <div>
            <img
                src='assets/icones/heroi/hero.png'
                height={26}
            />
            <Typography size="medium">
                Ordenar por nome - A/Z
            </Typography>
            <ToggleButton
                setToggle={setIsSort}
                toggle={isSort}
            />
        </div>
    )
}