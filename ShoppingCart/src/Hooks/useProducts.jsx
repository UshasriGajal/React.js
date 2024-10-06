import  {useQuery} from '@tanstack/react-query'

const useProducts = () =>{
    const fetchProducts = async () => {
        const products = await fetch('https://fakestoreapi.com/products');
        const data = products.json()
        return data
    };
    const {isPending, isError, data, error} =useQuery({
        queryKey: ['products'],
        queryFn :fetchProducts
    });
    return {isPending, isError, data, error}
}
export default useProducts