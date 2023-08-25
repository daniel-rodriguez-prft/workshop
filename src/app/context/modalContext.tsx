import {createContext, useContext, useState} from "react"
import {Dialog as DialogElement} from "@headlessui/react"

const DialogContext = createContext<any>([])

function DialogProvider(props: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogContext.Provider
      value={[isOpen, setIsOpen]}
      {...props}
    />
  )
}

function DialogContents(props: any) {
  const [isOpen, setIsOpen] = useContext(DialogContext)

  return (
    <DialogElement
      open={isOpen}
      onClose={() => setIsOpen(false)}
      {...props}
    />
  )
}

export {DialogContext, DialogProvider, DialogContents}
