import React from 'react'
import './App.css'
class Child extends React.Component{
    render(){
        return(
            <>
            <h3>
                HI, {this.propes.name}
                </h3></>
        )
    }
    
}
export default Child