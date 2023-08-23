import {GetStaticPathsContext, GetStaticPathsResult, GetStaticProps} from "next"
import Image from "next/image"
import Link from "next/link"
import {CORS_WORKER, APP_ENDPOINT, API_KEY} from "../constants"

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
      <Link href='/'>Regresar</Link>
      <p>{data.name}</p>
      <div>{data.description_raw}</div>
      <Image
        src={
          data.background_image ??
          "https://placehold.co/600x400/jpg?text=No+image"
        }
        alt='placeholder'
        width='640'
        height='360'
      />
    </div>
  )
}
