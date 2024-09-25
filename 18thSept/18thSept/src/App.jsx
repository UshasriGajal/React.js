import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <Outlet/>
    </>
  )
}

export default App
