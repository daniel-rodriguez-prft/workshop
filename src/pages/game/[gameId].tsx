import {GetStaticPathsContext, GetStaticPathsResult, GetStaticProps} from "next"
import Image from "next/image"
import Link from "next/link"
import Accordion from "../components/accordion"
import {CORS_WORKER, APP_ENDPOINT, API_KEY} from "../constants"
import {GameType, AccordionDataProps} from "../types"

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

export default function Page({data}: {data: GameType}) {
  const accordionData: AccordionDataProps[] = [
    {id: 0, header: "Description", content: data.description_raw},
    {
      id: 2,
      header: "Genres",
      content: (
        <>
          {data.genres.map(el => (
            <p key={el.id}>{el.name}</p>
          ))}
        </>
      )
    },
    {
      id: 1,
      header: "Image",
      content: (
        <Image
          src={
            data.background_image ??
            "https://placehold.co/600x400/jpg?text=No+image"
          }
          alt='placeholder'
          width='640'
          height='360'
        />
      )
    }
  ]

  return (
    <div>
      <Link href='/'>Regresar</Link>
      <Accordion className='accordion'>
        <Accordion.Title>
          <h1>{data.name}</h1>
        </Accordion.Title>
        <Accordion.Container>
          {accordionData.map(element => (
            <Accordion.Item key={element.id}>
              <Accordion.Heading>
                <h2>{element.header}</h2>
              </Accordion.Heading>
              <Accordion.Content className="accordion-content">
                <p>{element.content}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Container>
      </Accordion>
    </div>
  )
}
