import { useEffect, useRef } from 'react'

export default function useAudio(path: string) {
  const audio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audio.current = new Audio(path)
  }, [path])

  return audio
}
