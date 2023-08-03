import { CardSkeleton } from "@/components/CardSkeleton"
import { TypographySkeleton } from "@/components/TypographySkeleton"

export const CardsSkeleton = () => {
  return (
    <>
      {
        Array(20).fill('').map((_, i) => {
          const randomWidth = Math.random() * (100 - 20) + 20
          return (
            <div key={i}>
              <CardSkeleton size='136px' />
              <div style={{ marginTop: '0.6rem' }}>
                <TypographySkeleton width={randomWidth + 'px'} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}