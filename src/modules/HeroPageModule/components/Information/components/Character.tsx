import { CardSkeleton } from "@/components/CardSkeleton"
import { useHeroesStore } from "@/context"
import { useEffect, useState } from "react"
import { Hero } from "@/interfaces/HeroInterface"

export const Character = () => {
  const { hero } = useHeroesStore()
  const [heroData, setHeroData] = useState<Hero[]>([])

  useEffect(() => {
    setHeroData(hero)
  }, [hero])

  return (
    <>
      {heroData.length ?
        <img
          className="character"
          src={heroData[0]?.thumbnail.path + '.' + heroData[0]?.thumbnail.extension}
          alt="character"
          height={'320px'}
        />
        :
        <CardSkeleton
          size='320px'
        />
      }
    </>
  )
}