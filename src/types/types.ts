import {ReactElement} from "react"

export interface GameResponse {
  results: GameType[]
}
export interface GameType {
  id: number
  slug: string
  name: string
  released: string
  tba: false
  background_image: string
  rating: number
  rating_top: number
  metacritic: string
  description_raw: string
  short_screenshots: {
    id: number
    image: string
  }[]
  platforms: {
    platform: {
      id: number
      name: string
      slug: string
      image: string
      year_end: string
      year_start: number
      games_count: number
      image_background: string
    }
  }[]
  genres: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
}

export interface AccordionDataProps {
  id: number
  header: string
  content: string | ReactElement
}

export interface AccordionProps {
  title: string
  data: AccordionDataProps[]
}
