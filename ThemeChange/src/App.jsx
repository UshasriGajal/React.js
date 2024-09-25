
import './App.css'
import ThemeChange from './components/ThemeChange'
import { ThemeProvider } from './components/ThemeProvider'
import UpdateChange from './components/UpdateChange'

const App = () =>{
  <ThemeProvider>
    <ThemeChange />
    {/* <UpdateChange/> */}
  </ThemeProvider>
}
export default App