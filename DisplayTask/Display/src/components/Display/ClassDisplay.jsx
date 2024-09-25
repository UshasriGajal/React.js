import React from 'react'
// import { useState } from 'react'
import '../../App.css'
import './Display.css'
import style from './Display.module.css'
let FunBut={
    backgroundColor:"lightblue",
    height:'80px',
    color:'purple'
    }
class ClassDisplay extends React.Component{
    
    state = {classValue : 0 };
    Classcount =()=>{
        this.setState({classValue:this.state.classValue+1})
    }
    render(){
        return (
            <>
                {/* <h3>{this.state.classValue}</h3> */}
                <div>
                <button style={FunBut} onClick={this.Classcount}>Using Class Component</button>
                {this.state.classValue%2 != 0 && <div className='DisDiv'>
                    <h3 style={{color:'white'}}>This is done using class component</h3>
                    <h4 style={{color:'yellow'}}>This is done by inline css</h4>
                    <h4 className='external'>This is done by external css</h4>
                    <h4 className={style.module}>This is done by module css</h4>

                    </div>}
                </div>

            </>
        )
    }
}

export default ClassDisplay