import { ChangeEvent, useCallback, useState } from 'react'

export default function useInput(
  initialValue: string
): [
  string,
  (value: ((prevState: string) => string) | string) => void,
  (e: ChangeEvent<HTMLInputElement>) => void
] {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
    },
    [setValue]
  )

  return [value, setValue, onChange]
}
