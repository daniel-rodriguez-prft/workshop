import GameResponse from "../types"
import Image from "next/image"
import Link from "next/link"

export default function GameResult({game}: {game: GameResponse}) {
  return (
    <div>
      <h2>
        <Link href={`/game/${game.id}`}>{game.name}</Link>
      </h2>
      <Image
        src={
          game.background_image ??
          "https://placehold.co/600x400/jpg?text=No+image"
        }
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        alt='placeholder'
        width='640'
        height='360'
      />
    </div>
  )
}
