import List from "@/components/list"
import {GetStaticPathsContext, GetStaticPathsResult, GetStaticProps} from "next"
import Image from "next/image"
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
    },
    {
      title: "Image",
      content: data.background_image
    }
  ]

  return (
    <div className='container mx-auto p-4'>
      <Link
        className='text-blue-600 mb-4 block'
        href='/'>
        Regresar
      </Link>

      <List data={listData}>
        {(title, content) => (
          <>
            <strong>{title}:</strong>
            {title === "Image" ? (
              <Image
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEsCAQAAACfsolDAAAClklEQVR42u3TAQ0AAAjDMK4c6SAAB6SVsGSZLuC5GB2MDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNHB6IDRAaMDRgeMDhgdMDpgdDC60cHogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB6OLAEYHjA4YHTA6YHTA6IDRAaOD0QGjA0YHjA4YHTA6YHTA6GB0wOiA0QGjA0YHjA4YHTA6GB0wOmB0wOiA0QGjA0YHjA4YHYwOGB0wOmB0wOiA0QGjA0YHowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0wOhgdMDogNEBowNGB4wOGB0wOhgdMDpgdMDogNEBowNGB4wORgeMDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNHB6IDRAaMDRgeMDhgdMDpgdDA6YHTA6IDRAaMDRgeMDhgdMDoYHTA6YHTA6IDRAaMDRgeMDkYHjA4YHTA6YHTA6IDRAaOD0QGjA0YHjA4YHTA6YHTA6IDRweiA0QGjA0YHjA4YHTA6YHQwOmB0wOiA0QGjA0YHjA4YHYwOGB0wOmB0wOiA0QGjA0YHjA5GB4wOGB0wOmB0wOiA0QGjg9EBowNGB4wOGB0wOmB0wOhgdMDogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2MDhgdMDpgdMDogNEBowNGB6MDRgeMDhgdMDpgdMDogNHB6EYHowNGB4wOGB0wOmB0wOiA0cHogNEBowNGB4wOGB0wOmB0MDpgdMDogNEBowNGB4wOGB2MbnQwOmB0wOiA0QGjA0YHjA4YHYwOGB0wOmB0wOiA0QGjA9cCbcbA5CQ5DNsAAAAASUVORK5CYII='
                className='mx-auto'
                src={
                  content ?? "https://placehold.co/600x400/jpg?text=No+image"
                }
                alt='placeholder'
                sizes='100vw'
                style={{
                  width: "100%",
                  height: "auto"
                }}
                width={500}
                height={300}
              />
            ) : (
              <p> {content}</p>
            )}
          </>
        )}
      </List>
    </div>
  )
}
