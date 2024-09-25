import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  
  return (
   <>
   <BrowserRouter>
   <Nav />
   <Routes>
      <Route path='/' element={<Home/>}>
        Home
      </Route>
      <Route path='/about' element={<About/>}>
        About
      </Route>
      <Route path='/contact' element={<Contact/>}>
        Contact
      </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
