import { Typography } from "@/components/Typography"
import { ToggleButton } from "../toggleButton"
import { useEffect, useState } from "react"
import { useHeroesStore } from "@/context";
import { sortHeroesAlphabetically } from "@/utils/handleSortHeroesAlphabetically";
import { useSearchParams } from "next/navigation";

export const SortHeroes = () => {
    const { visible, setVisible, isSort, setIsSort } = useHeroesStore()
    const { has: hasPage } = useSearchParams()

    useEffect(() => {
        const sequence = isSort ? 'a-z' : 'z-a'
        const sortedData = sortHeroesAlphabetically(visible, sequence)
        setVisible(sortedData)
    }, [isSort, visible])

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