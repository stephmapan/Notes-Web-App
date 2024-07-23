import { React, useState, useEffect } from 'react'
import './App.css'
import Notes from './Notes.jsx'
import Sidebar from './Sidebar.jsx'

function App() {

  return (
    <>
      <Sidebar />
      <Notes />
    </>
  )
}

export default App
