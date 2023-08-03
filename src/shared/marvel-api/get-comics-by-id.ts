import { Comics } from "@/interfaces/ComicsInterface"
import axios from "axios"

interface Response {
  data: {
    results: Comics[]
  }
}

export const getComicsById = async (id: string) => {
  const BASE_URL = `https://gateway.marvel.com/v1/public/characters/${id}/comics?limit=10&`

  try {
    const { data } = await axios.get<Response>(BASE_URL, {
      params: {
        ts: process.env.NEXT_PUBLIC_TS,
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        hash: process.env.NEXT_PUBLIC_HASH
      }
    })

    const comicsData = data.data.results
    return comicsData
  } catch (error) {
    console.error(error);
  }
}