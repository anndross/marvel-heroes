import { Typography } from "@/components/Typography"
import { ToggleButton } from "../toggleButton"
import { useEffect } from "react"
import { useHeroesStore } from "@/context";
import { sortHeroesAlphabetically } from "@/utils/handleSortHeroesAlphabetically";

export const SortHeroes = () => {
    const { visible, setVisible, isSort, setIsSort } = useHeroesStore()

    useEffect(() => {
        const sequence = isSort ? 'a-z' : 'z-a'
        const sortedData = sortHeroesAlphabetically(visible, sequence)
        setVisible(sortedData)
    }, [isSort, visible, setVisible])

    return (
        <div>
            <img
                src='assets/icones/heroi/hero.png'
                height={26}
                alt="hero"
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