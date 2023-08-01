import { styled } from "@/stitches.config";

export const Container = styled('header', {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '$primary200'
})

export const Header = styled('header', {
  width: '100%',
  paddingTop: '1rem',
  display: 'flex',
  minHeight: '50px',
  alignItems: 'start',
  justifyContent: 'center',
  '& > div': {
    display: 'flex',
    gap: '20px',
    justifyContent: 'left',
    alignItems: 'start',
    width: '70vw',
  },
  '@media(max-width: 740px)': {
    '& > div': {
      flexDirection: 'column'
    }
  }
})

export const Information = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '70vw',
  margin: '0 auto',
  marginTop: '4rem',
})

