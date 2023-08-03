import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ComicSkeleton = () => {
  return (
    <div style={{ width: '90px', height: '120px' }}>
      <Skeleton count={1} height='100%' />
    </div>
  )
}