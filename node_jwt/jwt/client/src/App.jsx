import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>nav</header>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}

export default App