import { CardSkeleton } from "@/components/CardSkeleton"
import { TypographySkeleton } from "@/components/TypographySkeleton"

export const HeroesCardSkeleton = () => {
  const randomWidth = Math.random() * (100 - 20) + 20

  return (
    <div>
      <CardSkeleton size='136px' />
      <div style={{ marginTop: '0.6rem' }}>
        <TypographySkeleton width={randomWidth + 'px'} />
      </div>
    </div>
  )
}