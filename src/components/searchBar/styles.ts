import { styled } from "../../stitches.config"

export const Container = styled('div', {
  width: '100%',
  padding: '0px 20px',
  height: '3rem',
  borderRadius: '50px',
  variants: {
    variant: {
      primary: {
        background: '$primary100'
      },
      secondary: {
        background: '#fff'
      }
    }
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Icon = styled('img', {
  height: '50%',
})

export const Input = styled('input', {
  height: '100%',
  width: '100%',
  outline: 'none',
  border: 'none',
  background: 'transparent',
  textIndent: '2rem',
  borderRadius: '0 50px 50px 0',
})