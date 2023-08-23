export default function GameResult({
  name,
  onClick
}: {
  name: string
  onClick: any
}) {
  return (
    <div>
      <h2 onClick={onClick}>{name}</h2>
    </div>
  )
}
