import useProducts from "./Hooks/useProducts"
import './App.css'
const App =() =>{
  const {isPending, isError, data, error} = useProducts();
 
  if(isPending){
    return <h3>
      Loading...
    </h3>
  }
  if(isError){
    return <h3>
      {error.message}
    </h3>
  }
  return (
    <>
    <div className="mainDiv">
      {data.map((product)=>(
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.tittle} style={{height:'250px', width:'250px'}} />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default App