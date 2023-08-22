import {GetStaticPathsContext, GetStaticPathsResult, GetStaticProps} from "next"
import {useRouter} from "next/router"
import {CORS_WORKER, APP_ENDPOINT, API_KEY} from "../constants"
import useGameApi from "../hooks/useGameApi"
type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticProps: GetStaticProps<{}> = async context => {
  const {params} = context
  const res = await fetch(
    `${CORS_WORKER}/?${APP_ENDPOINT}/${params?.gameId}?key=${API_KEY}`
  )
  const data = await res.json()
  return {
    props: {data}
  }
}

export async function getStaticPaths(
  _context: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export default function Page({data}: {data: any}) {
  return (
    <div>
      <p>{data.name}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: data.description
        }}></p>
    </div>
  )
}
