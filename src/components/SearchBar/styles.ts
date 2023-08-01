import { styled } from "../../stitches.config"


export const Container = styled('div', {
  width: '100%',
  display: 'grid', 
  position: 'relative'
})

export const SearchBar = styled('div', {
  width: '100%',
  height: '3rem',
  borderRadius: '50px',
  marginBottom: '20px',
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
  marginLeft: '14px'
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

export const SearchedList = styled('ul', {
  width: '100%',
  maxHeight: '240px',
  overflowY: 'auto',
  borderRadius: '10px',
  padding: '0 10px',
  background: '$primary300',
  boxShadow: '0 0 4px 1px $colors$secondary100',
  '& li': {
    display: 'flex',
    margin: '10px 0',
    cursor: 'pointer',
    justifyContent: 'space-between',
    '& img': {
      borderRadius: '6px'
    }
  },
  variants: {
    variant: {
      primary: {
        position: 'none'
      },
      secondary: {
        position: 'absolute',
        top: '4rem',
      }
    }
  }
})