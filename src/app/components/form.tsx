import {useContext} from "react"
import {useRef} from "react"
import {useGameContext} from "../context/gameContext"

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)
  const {setSearchTerm} = useGameContext()
  return (
    <form
      onSubmit={ev => {
        ev.preventDefault()
        setSearchTerm && setSearchTerm(inputRef?.current?.value as string)
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
  )
}
