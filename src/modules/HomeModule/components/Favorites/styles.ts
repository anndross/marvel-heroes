import { styled } from "@/stitches.config";

export const ContainerNoFavorites = styled('div', {
  width: '60vw',
  display: 'flex',
  justifyContent: 'center',
  '@media(max-width: 675px)': {
    width: '80vw'
  }
})