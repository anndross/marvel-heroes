import { styled } from "@/stitches.config"


export const Container = styled('div', {
  margin: '6rem 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '@media(max-width: 800px)': {
    alignItems: 'center',
    '& p': {
      textAlign: 'center'
    }
  },
})

export const LastReleases = styled('div', {
  marginTop: '5rem',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  justifyContent: 'space-between',
  justifyItems: 'center',
  gap: '1vw',
  '@media(max-width: 920px)': {
  gridTemplateColumns: 'repeat(5, 1fr)',
  },
  '@media(max-width: 680px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@media(max-width: 530px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media(max-width: 380px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media(max-width: 300px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ComicCard = styled('div', {
  display: 'flex',
  maxWidth: '90px',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    marginBottom: '1rem',
    width: '100%',
    borderRadius: '4px'
  }
})