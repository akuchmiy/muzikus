import { useCallback, useEffect, useState } from 'react'
import { defaultApiInstance } from 'Services/api'
import { AxiosResponse } from 'axios'
import { useEvent } from 'effector-react'
import { setError } from 'Store/error'

type Response<T> = AxiosResponse<T> | Promise<AxiosResponse<T>>

type UrlOrFetchFunction<T> =
  | string
  | ((...params: any[]) => Response<T>)
  | (() => Response<T>)

export default function useFetch<T>(
  initialValue: T,
  urlOrFunction: UrlOrFetchFunction<T>,
  functionParams?: any[]
): [T, boolean, boolean] {
  const [data, setData] = useState<T>(initialValue)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const setErrorState = useEvent(setError)

  const jsonParams = JSON.stringify(functionParams)
  const fetchData = useCallback(() => {
    if (typeof urlOrFunction === 'string')
      return defaultApiInstance.get<T>(urlOrFunction)

    return urlOrFunction.apply(null, functionParams || [])
  }, [urlOrFunction, jsonParams])

  useEffect(() => {
    setIsLoading(true)
    ;(async function () {
      try {
        const data = await fetchData()
        setData(data.data)
      } catch (e) {
        if (e instanceof Error) setErrorState(e.message)
        setIsError(true)
      }

      setIsLoading(false)
    })()
  }, [fetchData, setErrorState])

  return [data, isLoading, isError]
}
