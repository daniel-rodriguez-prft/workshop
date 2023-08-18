import {useState} from "react"
import {createContext, useRef} from "react"
import {ElementProps} from "../types"
import Form from "./form"

export default function Home(props: ElementProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <Form />
      {props.children}
    </div>
  )
}
