import {useState} from "react"
import "../styles/accordion.scss"
import { AccordionProps } from "../types"

export default function Accordion({title, data}: AccordionProps) {
  return (
    <div>
      <h1>{title}</h1>
      {data &&
        data.map(element => {
          const [isOpen, setOpen] = useState(false)

          return (
            <div key={element.id}>
              <h3 onClick={() => setOpen(!isOpen)}>{element.header}</h3>
              <div className={`accordion ${isOpen ? "open" : "closed"}`}>
                {element.content}
              </div>
            </div>
          )
        })}
    </div>
  )
}
