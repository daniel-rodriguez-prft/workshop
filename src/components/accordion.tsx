import {useMemo, useState, useContext, createContext} from "react"
import {AccordionContextProps, ElementType} from "../types/types"


const callAll =
  (...fns: VoidFunction[]) =>
  (...args: []) =>
    fns.forEach(fn => typeof fn === "function" && fn(...args))

const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  setIsOpen: () => {}
})

/* function test (...fns: VoidFunction[]) {
  return function(...args: []){
    return fns.forEach(function(fn){
      return fn(...args)
    })
  }
} */

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (context === undefined) {
    throw new Error("useAccordionContext must be used in an AccordionProvider")
  }

  return context
}

export default function Accordion({children, ...remainingProps}: ElementType) {
  return (
    <section {...remainingProps}>
      <>{children}</>
    </section>
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

Accordion.Title = function Title({children, ...restProps}: ElementType) {
  return <div {...restProps}> {children}</div>
}

Accordion.Container = function Container({
  children,
  ...remainingProps
}: ElementType) {
  return <div {...remainingProps}>{children}</div>
}

Accordion.Heading = function Heading({
  children,
  onClick,
  ...restProps
}: ElementType) {
  const {isOpen, setIsOpen} = useAccordionContext()
  return (
    <div {...restProps} onClick={callAll(() => setIsOpen(!isOpen), onClick as VoidFunction)}>{children}</div>
  )
}

Accordion.Content = function Content({
  children,
  className,
  ...remainingProps
}: ElementType) {
  const {isOpen} = useAccordionContext()
  const classes = ["mb-5", `${isOpen ? "block" : "hidden"}`, className].join(
    " "
  )

  return (
    <div
      {...remainingProps}
      className={classes}>
      {children}
    </div>
  )
}
