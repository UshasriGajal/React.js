import { useState } from "react"
import '../../App.css'
import './Display.css'
import style from './Display.module.css'

let FunBut={
    backgroundColor:"lightblue",
    height:'80px',
    color:'purple'
}
const FunctionalDisplay = ()=>{
    const [value, setDisplay]=useState(0)
    const count = ()=>{
        setDisplay(value+1)
    }
    
    return(
        <>
            {/* <h3>{value}</h3> */}
            <div>
            <button style={FunBut} onClick={count}>Using Function Component</button>
            {/* <br /> */}
            {(value%2!=0 &&  <div className='DisDiv'>
                <h3 style={{color:'white'}}>This is done using Functional component</h3>
                <h4 style={{color:'yellow'}}>This is done by inline css</h4>
                <h4 className='external'>This is done by external css</h4>
                <h4 className={style.module}>This is done by module css</h4>
                </div>
            )}
            </div>
            
        </>
    )
}
export default FunctionalDisplay