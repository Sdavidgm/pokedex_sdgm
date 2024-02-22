
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/Pages/HomePage'
import PokedexPage from './assets/Pages/PokedexPage'
import PokeIdePage from './assets/Pages/PokeIdePage'
import ProtectedRoutes from './assets/Pages/ProtectedRoutes'

function App() {
 

  return (
   
    <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokeIdePage/>}/>
        </Route>
    </Routes>
  
  )
}

export default App;
