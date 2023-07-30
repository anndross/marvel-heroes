"use client";
import { useEffect, useState } from 'react';
import { HomeModule } from '../modules/HomeModule';
import axios from 'axios';
import { HeroContext } from './context';

export default function Home() {
  const [heroes, setHeroes] = useState([]) as any
  const ts = process.env.NEXT_PUBLIC_TS
  const key = process.env.NEXT_PUBLIC_API_KEY
  const hash = process.env.NEXT_PUBLIC_HASH

  const url = `https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${key}&hash=${hash}`

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(url);
        setHeroes(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCharacters()
  }, [])

  return (
    <HeroContext.Provider value={{ heroes, setHeroes }}>
      <HomeModule />
    </HeroContext.Provider>
  );
}

