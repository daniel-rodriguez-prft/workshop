import {useEffect, useState} from "react"
import {API_KEY, APP_ENDPOINT, CORS_WORKER} from "../constants"
import {GameResponse} from "../types"
const useGameApi = (searchTerm: string) => {
  const [data, setData] = useState<{
    results?: GameResponse[]
  }>({})
  useEffect(() => {
    fetch(`${CORS_WORKER}/?${APP_ENDPOINT}?key=${API_KEY}&search=${searchTerm}`)
      .then(res => res.json())
      .then(dataRes => setData(dataRes))
  }, [searchTerm])

  return {data: data.results}
}

export default useGameApi
