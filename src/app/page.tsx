"use client"

import Form from "./components/form"
import Home from "./components/home"
import {GameProvider} from "./context/gameContext"
//import styles from "./page.module.css"

export default function Main() {
  return (
    <GameProvider>
      <Home />
    </GameProvider>
  )
}
