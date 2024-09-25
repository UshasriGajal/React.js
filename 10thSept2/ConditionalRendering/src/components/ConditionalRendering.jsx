import { useState } from "react"
const ConditionalRendering = ()=>{
    
    // 1.if_else
    // if(validAge){
    //     return <div>you can vote!!</div>
    // }
    // else{
    //     return <div>You cannot vote!!</div>
    // }
    // 2.Element variable
    // let age
    // if(validAge){
    //     age =<div>you can vote</div>
    // }
    // else{
    //     age=<div>you cannot vote!!</div>
    // }

    // return <>{age}</>
    // 3.Ternary operator
    // return
    // <>
    //     if(validAge ? <div>you can vote</div>:<div>You cannot vote</div>)
    // </>
    // 4.short circuit 
    return (<>
        {(validAge && <div>you can vote</div>)}
    </>
    )
}
    

export default ConditionalRendering