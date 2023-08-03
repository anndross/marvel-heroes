import { Typography } from "@/components/Typography"
import { ToggleButton } from "../../../toggleButton"
import { useEffect, useState } from "react"
import { useHeroesStore } from "@/context";

const sortHeroesAlphalbetically = (data: any[], sequence: 'z-a' | 'a-z') => {

    return data.sort((a: any, b: any) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        const sequenceA = (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        const sequenceZ = (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;

        return sequence === 'a-z' ? sequenceA : sequenceZ
    });
}

export const SortHeroes = () => {
    const { visible, setVisible } = useHeroesStore()

    const [isSort, setIsSort] = useState(true)

    useEffect(() => {
        if (isSort === false) {
            const sortedData =
                sortHeroesAlphalbetically(visible, 'z-a')
            setVisible(sortedData)
        } else {
            const sortedData =
                sortHeroesAlphalbetically(visible, 'a-z')
            setVisible(sortedData)
        }
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