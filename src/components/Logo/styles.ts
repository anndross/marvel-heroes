import { styled } from "@stitches/react";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: '20px',
  '& p': {
    whiteSpace: 'nowrap'
  },
  '@media(max-width: 340px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  }
})