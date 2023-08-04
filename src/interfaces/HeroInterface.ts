export interface Hero {
  id: string
  name: string
  description: string
  comics: {
    available: number
  }
  series: {
    available: number
  }
  thumbnail: {
    path: string
    extension: string
  }
}