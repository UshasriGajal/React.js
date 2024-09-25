import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Product from './components/Product'
import Reviews from './components/Reviews'
import Specification from './components/Specification'
import Home from './components/Home'

const App = () =>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/product/:id' element={<Product />}>
        <Route path='reviews' element={<Reviews />}/>
        <Route path='specifications' element={<Specification />}/>
      </Route>
    {/* </Route> */}
   </Routes>
   </BrowserRouter>

    </>
  )
}
export default App