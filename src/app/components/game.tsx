import {useRef, useState} from "react"
import useGameApi from "../hooks/useGameApi"
import {GameType} from "../types"
import DialogElement from "./dialog"
import GameResult from "./gameResult"

export function Game() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentGame, setCurrentGame] = useState<GameType>({
    name: "",
    image: "",
    desc: ""
  })
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const {data} = useGameApi(searchTerm)
  const handleModalOpen = ({name, image}: GameType) => {
    setCurrentGame({
      name,
      image
    })
    setIsOpen(true)
  }

  return (
    <div
      style={{
        opacity: isOpen ? 0.3 : 1,
        filter: isOpen ? "blur(3px)" : "unset"
      }}>
      <DialogElement
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={currentGame.name}
        image={currentGame.image}
      />
      <form
        onSubmit={ev => {
          ev.preventDefault()
          setSearchTerm(inputRef?.current?.value as string)
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
      {data && data.length > 1 ? (
        <div>
          {data.map(element => {
            return (
              <GameResult
                onClick={() =>
                  handleModalOpen({
                    name: element.name,
                    image: element.background_image
                  })
                }
                key={element.id}
                name={element.name}
              />
            )
          })}
        </div>
      ) : (
        <div>Sin resultados</div>
      )}
      {/* {data && (
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
      )} */}
    </div>
  )
}