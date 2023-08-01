import { styled } from "@/stitches.config"

export const Container = styled('div', {
  minWidth: '3rem',
  padding: '4px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: '0 0 3px 0.1px $colors$secondary100 inset'
})

export const Ball = styled('div', {
  height: '20px',
  width: '20px',
  transition: '0.5s',
  borderRadius: '50%',
  background: '$tertiary100',
  boxShadow: '0 0 6px 1px $colors$secondary200'
})