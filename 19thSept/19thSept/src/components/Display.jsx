import { useNavigate } from 'react-router-dom';
// 
// 
const Display = ({arr}) =>{
    const navigate = useNavigate();
    const goBack = () =>{
            navigate('/')
        }
    console.log(arr)
    return (
        <>
        <h1>Data Received</h1>
        {
            arr.map((data,index)=>(
                <div style={{border:"1px solid black"}}>
                    <p>
                        {`Name:${data.name}`}
                    </p>
                    <p>
                        {`Department:${data.department}`}
                    </p>
                    <p>
                        {`Rating:${data.rating}`}
                    </p>
                </div>
            ))
        }
        <button onClick={goBack}>Go Back</button>
        </>
    )
}
export default Display