import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
  width: string
}

export const TypographySkeleton = ({ width }: Props) => {
  return (
    <div style={{ width: width, height: '1rem' }}>
      <Skeleton count={1} height='100%' />
    </div>
  )
}