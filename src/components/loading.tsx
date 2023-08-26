import {Spin} from "./spin"

export function Loading() {
  return (
    <div className='container flex'>
      <Spin />
      <p>Cargando</p>
    </div>
  )
}
