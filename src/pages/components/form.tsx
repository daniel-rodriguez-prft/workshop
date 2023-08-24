import {useRef} from "react"

export default function Form({setSearchTerm}) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
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
  )
}
