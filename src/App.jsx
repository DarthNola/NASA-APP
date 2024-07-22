import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"


function App() {
  const NASA_KEY =import.meta.env.VITE_NASA_API_KEY
  const [showModal , setShowModal] = useState(false)
  function handleToggleModal() {
    // set opposite of the state
    setShowModal(!showModal)
  }

  return (
    <>
      <Main/>
      {showModal && (
        <Sidebar handleToggleModal={handleToggleModal}/>
      )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
