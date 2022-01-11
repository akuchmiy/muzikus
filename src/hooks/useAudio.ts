import { useEffect, useState } from 'react'

export default function useAudio(path: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (path) setAudio(new Audio(path))
  }, [path])

  return audio
}
