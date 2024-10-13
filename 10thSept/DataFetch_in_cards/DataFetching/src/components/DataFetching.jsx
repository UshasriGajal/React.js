import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const DataFetching = ()=>{
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
            
            
                {data.map((post)=>(
                    <div id="{post.id}">
                        <div className="card">
                            <img src={post.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{post.id}</h5>
                                <p className="card-text">{post.title}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                    </div>
                    // <li key={post.id}>{post.title}</li>
                ))}
            
        </div>
    )
}
export default DataFetching