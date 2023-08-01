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