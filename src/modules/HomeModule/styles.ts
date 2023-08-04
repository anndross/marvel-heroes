import { styled } from "../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  paddingTop: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '60vw',
  margin: '0 auto',
  gap: '1rem',
  '& .text-container': {
    textAlign: 'center',
  },
  '@media(max-width: 675px)': {
    width: '80vw'
  }
})

export const Grid = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'repeat(5, 1fr)',
  alignContent: 'center',
  justifyItems: 'center',
  gap: '2rem',
  '@media(max-width: 1350px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@media(max-width: 1060px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media(max-width: 790px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media(max-width: 380px)': {
    gridTemplateColumns: '1fr',
  },
})