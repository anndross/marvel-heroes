import { Hero } from "@/interfaces/HeroInterface"
import axios from "axios"

interface Response {
  data: {
    total: string
    results: Hero[]
  }
}

export const getHeroes = async (offset = 0) => {
  const BASE_URL = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&`

  try {
    const { data } = await axios.get<Response>(BASE_URL, {
      params: {
        ts: process.env.NEXT_PUBLIC_TS,
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        hash: process.env.NEXT_PUBLIC_HASH
      }
    })

    const heroesData = {
      total: String(data.data.total),
      results: data.data.results.map(e => {
        return {
          ...e,
          isFavorite: false,
          review: 0
        }
      })
    }

    return heroesData
  } catch (error) {
    console.error(error);
  }
}