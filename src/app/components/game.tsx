import Image from "next/image"
import {useRef, useState} from "react"
import {useGameContext} from "../context/gameContext"
import useGameApi from "../hooks/useGameApi"
import {ElementProps} from "../types"
import Slider from "./carousel"
const Title = ({children}: ElementProps) => <h2>{children}</h2>

export function Game() {
  const {searchTerm} = useGameContext()
  const {data} = useGameApi(searchTerm as string)
  const [gameIndex, setGameIndex] = useState<number>(
    Math.floor(Math.random() * 10)
  )

  return (
    <div>
      {data && (
        <div>
          <Game.Title>
            <>{data[gameIndex].name}</>
          </Game.Title>
          <Image
            src={
              data[gameIndex]?.background_image ??
              "https://placehold.co/600x400/jpg?text=No+image"
            }
            alt='placeholder'
            width='640'
            height='360'
          />
          <h3>Plataformas</h3>
          <ul>
            {data[gameIndex].platforms.map(el => (
              <li key={el.platform.name}>{el.platform.name}</li>
            ))}
          </ul>
          <h3>Fecha de lanzamiento</h3>
          <p>{data[gameIndex].released}</p>
          <h3>Puntaje promedio de Metacritic</h3>
          <p>{data[gameIndex].metacritic}</p>
          <h3>Géneros</h3>
          <ul>
            {data[gameIndex].genres.map(el => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ul>
          <Slider images={data[gameIndex].short_screenshots} />
        </div>
      )}
    </div>
  )
}
Game.Title = Title
