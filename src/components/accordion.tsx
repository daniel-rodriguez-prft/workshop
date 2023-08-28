import { useMemo, useState, useContext, createContext } from "react"
import { AccordionContextProps, ElementType } from "../types/types";

const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  setIsOpen: () => {}
})

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (context === undefined) {
    throw new Error("useAccordionContext must be used in an AccordionProvider")
  }

  return context
}

export default function Accordion({children, ...remainingProps}: ElementType) {
  return (
    <Accordion.Container {...remainingProps}>
      <>{children}</>
    </Accordion.Container>
  )
}

Accordion.Item = function Item({children}: ElementType) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(() => ({isOpen, setIsOpen}), [isOpen, setIsOpen])

  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  )
}

Accordion.Title = function Title({children}: ElementType) {
  return <div>{children}</div>
}

Accordion.Container = function Container({
  children,
  ...remainingProps
}: ElementType) {
  return <div {...remainingProps}>{children}</div>
}

Accordion.Heading = function Heading({children}: ElementType) {
  const {isOpen, setIsOpen} = useAccordionContext()
  return <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
}

Accordion.Content = function Content({
  children,
  className,
  ...remainingProps
}: ElementType) {
  const {isOpen} = useAccordionContext()
  const classes = ["mb-5", `${isOpen ? "block" : "hidden"}`, className].join(" ")

  return (
    <div
      {...remainingProps}
      className={classes}>
      {children}
    </div>
  )
}
