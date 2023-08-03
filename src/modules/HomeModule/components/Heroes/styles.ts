import { styled } from "../../../../stitches.config"

export const Container = styled('div', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'repeat(5, 1fr)',
  alignContent: 'center',
  justifyItems: 'center',
  gap: '2rem',
  '@media(max-width: 1120px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  '@media(max-width: 930px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media(max-width: 600px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media(max-width: 380px)': {
    gridTemplateColumns: '1fr',
  },
})

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

export const ContainerEmptyFavorite = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})