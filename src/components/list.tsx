import {ReactElement} from "react"

export default function List({
  children,
  data
}: {
  children: (title: string, content: string) => ReactElement
  data: {title: string, content: string}[]
}) {
  return (
    <ul>
      {data.map(({title, content}) => (
        <li key={title}>{children(title, content)}</li>
      ))}
    </ul>
  )
}
