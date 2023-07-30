'use client';
import React from "react"
import { useServerInsertedHTML } from "next/navigation"
import { getCssText } from '@/stitches.config'

export function ServerStylesheet({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  })

  return children
}