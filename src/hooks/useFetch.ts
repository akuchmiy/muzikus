import { useCallback, useEffect, useState } from 'react'
import { defaultApiInstance } from 'Services/api'
import { AxiosResponse } from 'axios'

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
        setIsLoading(false)
      } catch (e) {
        // TODO - set global error state
        setIsError(true)
        setIsLoading(false)
      }
    })()
  }, [fetchData])

  return [data, isLoading, isError]
}
