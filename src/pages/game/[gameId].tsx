import List from "@/components/list"
import {GetStaticPathsContext, GetStaticPathsResult, GetStaticProps} from "next"
import Link from "next/link"
import {GameType} from "../../types/types"

export const getStaticProps: GetStaticProps<{}> = async context => {
  const {params} = context
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CORS_WORKER}/?${process.env.NEXT_PUBLIC_APP_ENDPOINT}/${params?.gameId}?key=${process.env.NEXT_PUBLIC_API_KEY}`
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

export default function Page({data}: {data: GameType}) {
  const listData = [
    {
      title: "Name",
      content: data.name
    },
    {
      title: "Release date",
      content: data.released ?? "TBA"
    },
    {
      title: "Platforms",
      content: data.platforms.map(el => el.platform.name).join(", ")
    },
    {
      title: "Description",
      content: data.description_raw
    }
  ]

  return (
    <div className='container mx-auto p-4'>
      <Link
        className='text-blue-600 mb-4 block'
        href='/'>
        Regresar
      </Link>

      <List data={listData} />
    </div>
  )
}
