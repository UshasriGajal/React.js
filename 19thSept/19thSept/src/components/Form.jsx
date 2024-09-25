import { useState } from "react"
import Display from "./Display"
import { useNavigate } from 'react-router-dom';

const Form = ({setarr}) =>{
    // const [arr,setarr]=useState([])
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

    const handleForm = (e)=>{
        e.preventDefault
        // const {name,value} = e.target
        setarr((prevdata)=>
            [...prevdata,{name,department,rating}]
        )
        navigate('/diplay')
        console.log(setarr)
    }

    // const handleChange =(e)=>{
    //     setdataObj(e.target.value)    
    // }
    
    return (
        <>
            <form onSubmit={handleForm}>
                <label >
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label >
                    Department:
                    <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)}/>
                </label>
                <label>
                    Rating:
                    <input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
            {/* <Display dataObj={dataObj} /> */}
        </>
    )
}
export default Form 