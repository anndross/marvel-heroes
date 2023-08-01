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
  padding: '0.6rem',
  background: '$secondary100',
  color: '#000',
  border: '0',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  '&:hover': {
    background: '$secondary200'
  }
})