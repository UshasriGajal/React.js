import { useEffect , useState } from "react"
import axios from 'axios'
const DataFetch = ()=>{
    const [data ,setdata] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                const response =await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setdata(response.data)

                setLoading(false)
            } 
            catch (error){
                console.log('error occured:', error);
                setLoading(false)
            }

        };
        fetchData()
    },[])
    // Conditional rendering
    if(loading) return <h3>Loading.....</h3>
    return (
        <div>
            <h1>Products list</h1>
            {/* {console.log(data)} */}
            <ul>
                {data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default DataFetch