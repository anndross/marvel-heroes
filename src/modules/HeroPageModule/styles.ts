import { styled } from "@/stitches.config";

export const Container = styled('header', {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '$primary200'
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
})

