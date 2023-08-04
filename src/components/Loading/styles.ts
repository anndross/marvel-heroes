import { styled, keyframes } from "@/stitches.config";

export const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const Loader = styled('div', {
  margin: 'auto',
  border: '20px solid #EAF0F6',
  borderRadius: '50%',
  borderTop: '20px solid #FF7A59',
  width: '200px',
  height: '200px',
  animation: `${spinner} 4s linear infinite`
})