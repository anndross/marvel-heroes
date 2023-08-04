"use client";
import { useEffect } from 'react';
import { HomeModule } from '../modules/HomeModule';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    if (!params.has('heroes') && !params.has('favorites'))
      router.push('/?heroes=1')
  }, [params, router])

  return (
    <HomeModule />
  );
}

