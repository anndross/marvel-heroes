import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
  size: string
}

export const CardSkeleton = ({ size }: Props) => {
  return (
    <div style={{ width: size, height: size }}>
      <Skeleton count={1} height='100%' />
    </div>
  )
}