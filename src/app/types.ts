export default interface GameResponse {
  id: number
  slug: string
  name: string
  released: string
  tba: false
  background_image: string
  rating: number
  rating_top: number
  metacritic: string
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
