import { styled } from "../../stitches.config"

export const Container = styled('div', {
  width: '3rem',
  padding: '4px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$secondary100'
})

export const Ball = styled('div', {
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  background: '$tertiary100',
})