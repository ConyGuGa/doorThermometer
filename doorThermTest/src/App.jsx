import { useState } from 'react'
import './App.css'
import { OpenDoor } from './components/doorComponents/openDoor'
import { CloseDoor } from './components/doorComponents/closeDoor'

function App() {
  
  const [openDoor, setOpenDoor] = useState(true)

  return (
    <>

      <div className="container">
        {openDoor ? <OpenDoor></OpenDoor> : <CloseDoor></CloseDoor>}
      </div>

      <button className="CloseOrOpen" onClick={() => setOpenDoor(!openDoor)}>
        {openDoor ? "Close Door" : "Open Door"}
      </button>
    </>
  )
}

export default App
