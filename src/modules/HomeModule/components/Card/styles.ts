import { styled } from "@/stitches.config";

export const Card = styled('div', {
  width: '136px',
  '& > img': {
    borderBottom: '2px solid $tertiary100',
    borderRadius: '6px',
    height: '136px',
    width: '100%',
    cursor: 'pointer'
  },
  '& div': {
    padding: '10px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start'
  }
})