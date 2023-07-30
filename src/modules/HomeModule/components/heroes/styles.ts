import { styled } from "../../../../stitches.config"

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '2rem'
})

export const Card = styled('div', {
  width: '100%',
  '& > img': {
    height: '140px',
    borderBottom: '2px solid $tertiary100'
  },
  '& div': {
    padding: '10px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})