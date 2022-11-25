import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<InputName/>}></Route>
          <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex/>}></Route>
          <Route path='/pokedex/:id' element={<PokedexId/>}></Route>  
          </Route>    
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
