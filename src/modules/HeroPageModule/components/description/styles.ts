import { styled } from "@/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const Header = styled('header', {
  maxWidth: '100vw',
  display: 'flex',
  gap: '5rem',
  height: '50px',
  padding: '20px 0',
  paddingLeft: '10%',
  paddingRight: '36%',
  alignItems: 'center',
})

export const Information = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '70vw',
  margin: '0 auto',
  marginTop: '4rem',
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export const Description = styled('div', {
  width: '26%',
  '& .text': {
    margin: '2rem 0',
    lineHeight: '1.6rem',
    textAlign: 'left'
  }
})

export const Name = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
})


export const Collection = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})


export const Job = styled('div', {
  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  }
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '0.3rem',
  alignItems: 'center',
  '& img': {
    cursor: 'pointer'
  }
})

export const LastComic = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const LastReleases = styled('div', {
  marginTop: '5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '2rem'
})

export const ComicCard = styled('div', {
  width: '100%',
  '& img': {
    width: '100%'
  }
})