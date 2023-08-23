import GameResponse from "../types"
import Image from "next/image"
import Link from "next/link"

export default function GameResult({game}: {game: GameResponse}) {
  return (
    <div>
      <h2>
        <Link href={`/game/${game.id}`}>{game.name}</Link>
      </h2>
    </div>
  )
}
