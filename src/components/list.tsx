export default function List({
  data
}: {
  data: {
    title: string
    content: string
  }[]
}) {
  return (
    <ul>
      {data.map(el => (
        <li key={el.title}>
          <strong>
            <span>{el.title}</span>:
          </strong>
          <span> {el.content}</span>
        </li>
      ))}
    </ul>
  )
}
