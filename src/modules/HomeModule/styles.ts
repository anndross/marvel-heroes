import { styled } from "../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '50vw',
  margin: '0 auto',
  gap: '2.5rem',
  '& .text-container': {
    textAlign: 'center',
  }
})