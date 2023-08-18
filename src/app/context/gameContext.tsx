import {ReactElement, useState} from "react"
import {createContext, useContext} from "react"
import {GameResponse, ThemeContextType} from "../types"

const GameContext = createContext<ThemeContextType>({})

export function GameProvider(props: {children: ReactElement}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameData, setGameData] = useState<GameResponse[]>([])
  //const inputRef = useRef<HTMLInputElement>(null)

  return (
    <GameContext.Provider value={{gameData, setGameData}}>
      {props.children}
    </GameContext.Provider>
  )
}

export function useGameContext() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGameContext debe usarse dentro de un GameProvider")
  }

  return context
}
