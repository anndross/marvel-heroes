import axios from "axios"

interface Hero {
  name: string
}

interface Response {
  data: {
    results: any[]
  }
}

export const getHeroById = async (id: string) => {
  const BASE_URL = `https://gateway.marvel.com/v1/public/characters/${id}`

  try {
    const { data } = await axios.get<Response>(BASE_URL, {
      params: {
        ts: process.env.NEXT_PUBLIC_TS,
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        hash: process.env.NEXT_PUBLIC_HASH
      }
    })

    const heroData = data.data.results
    return heroData
  } catch (error) {
    console.error(error);
  }
}