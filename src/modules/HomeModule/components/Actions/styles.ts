import { styled } from "@/stitches.config";

export const Actions = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  '@media(max-width: 745px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px'
  }
})

export const FiltersContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  '& > div': {
    marginX: '1rem'
  },
  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  '@media(max-width: 745px)': {
    flexDirection: 'column'
  }
})
