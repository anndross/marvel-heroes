import { Typography } from "@/components/Typography"
import { ToggleButton } from "../../toggleButton"
import { useEffect, useState } from "react"
import { useHeroesStore } from "@/context"


const sortHeroesAlphalbetically = (data: any[]) => {
    return data.sort((a: any, b: any) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
}

export const SortHeroes = () => {
    const [isSort, setIsSort] = useState(true) 
    const {setVisibleHeroes, heroes} = useHeroesStore()
    console.log(heroes)
    // useEffect(() => {
    //     if(isSort && heroes.results.length) {
    //         const sortedData = 
    //             sortHeroesAlphalbetically(heroes.results)
          
    //         setVisibleHeroes(sortedData)
    //     }
    // }, [isSort])

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