// import Display from "./components/FunctionalDisplay"

import ClassDisplay from "./components/Display/ClassDisplay"
import FunctionalDisplay from "./components/Display/FunctionalDisplay"
import './App.css'

const App = ()=>{
  return (
    <div className="display">
    
      <FunctionalDisplay />
      <ClassDisplay />
    </div>
  )
}

export default App