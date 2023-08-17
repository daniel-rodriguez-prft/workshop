import Image from "next/image"
import {useRef, useState} from "react"
import useGameApi from "../hooks/useGameApi"
import Slider from "./carousel"

export function Game() {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef(null)
  const {data} = useGameApi(searchTerm)
  const [gameIndex, setGameIndex] = useState<number>(
    Math.floor(Math.random() * 10)
  )

  return (
    <div>
      <h1>Título</h1>
      <form
        onSubmit={ev => {
          ev.preventDefault()
          setSearchTerm(inputRef?.current?.value)
          setGameIndex(0)
        }}>
        <input
          type='text'
          name=''
          id=''
          ref={inputRef}
        />
        <input
          type='submit'
          value='enter'
        />
      </form>
      {data && (
        <div>
          {gameIndex}
          <h2>{data[gameIndex].name}</h2>
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
