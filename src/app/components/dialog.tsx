import {Dialog} from "@headlessui/react"
import Image from "next/image"
import "../styles/dialog.scss"
import {DialogType} from "../types"

export default function DialogElement({
  isOpen,
  setIsOpen,
  title,
  image
}: DialogType) {
  return (
    <Dialog
      className='modal'
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <div className='modalContent'>
        <button
          className='closeBtn'
          onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <div className='modalHeader'>
          <h1>{title}</h1>
        </div>
        <Image
          className='modalImage'
          src={image ?? "https://placehold.co/600x400/jpg?text=No+image"}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
          alt='placeholder'
          width='640'
          height='360'
        />
      </div>
    </Dialog>
  )
}
