import { styled } from "@/stitches.config";

export const Container = styled('div', {
  width: '100%',
  paddingBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  justifyContent: 'center'
})

export const Button = styled('button', {
  height: '40px',
  width: '40px',

  background: '$secondary100',
  color: '#000',
  border: '0',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  '&:hover': {
    background: '$secondary200'
  }
})

export const NextPrevButton = styled('button', {
  padding: '0.6rem',
  background: 'transparent',
  color: '#000',
  border: '0',
  fontSize: '20px',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  '&:hover': {
    background: '$primary100'
  }
})
