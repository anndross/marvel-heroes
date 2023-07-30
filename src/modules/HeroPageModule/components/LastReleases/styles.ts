import { styled } from "@/stitches.config"


export const Container = styled('div', {
  margin: '6rem 0',
})

export const LastReleases = styled('div', {
  marginTop: '5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '5rem'
})

export const ComicCard = styled('div', {
  width: '100%',
  '& img': {
    width: '100%',
    marginBottom: '1rem'
  }
})