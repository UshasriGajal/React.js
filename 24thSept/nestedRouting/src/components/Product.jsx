import { Outlet, useParams, Link } from "react-router-dom";
import Specification from "./Specification";

const productDetails = {
  1: {
    name: "Laptop",
    description: "This is amaazing laptop",
    picture: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
    reviews:'very good laptop',
    specification:['weight:1.2kg','color:Black','warranty:1year']

  },
  2: {
    name: "Mobile",
    description: "This is amazing Mobile",
    picture:
      "https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png",
    reviews:'Excellent Mobile',
    specification:['weight:1kg','color:pink','warranty:2year']
  },
  3: {
    name: "Speaker",
    description: "This is amazing speaker",
    picture:
      "https://avstore.in/cdn/shop/products/white4_964a08f0-a2ce-46b0-8013-353c08e23e8f.png?v=1615287046",
    reviews:'Nice Quality',
    specification:['weight:1.5kg','color:Brown','warranty:3year']
  },
  4: {
    name: "Shirts",
    description: "This is amazing shirt",
    picture: "https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-500x500.jpg",
    reviews:'Perfect fit',
    specification:['color:Blue','cloth:cotton']
  },
  5: {
    name: "Trousers",
    description: "This is amazing trouser",
    picture: "https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-500x500.jpg",
    reviews:'Women trousers',
    specification:['color:Brown','cloth:rayon']
  },
};
const Product = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <>
        <img src={product.picture} alt={product.name} style={{height:'400px' ,width:'500px'}} />
        <h2>{product.name}</h2>
        <h4>{product.description}</h4>

        <h3>More Information</h3>
        <ul>
          <li>
            <Link to="reviews" state={product}>Reviews</Link>
            {/* <reviews review ={product.review}/> */}
          </li>
          <li>
            <Link to="specifications" state={product}>Specification</Link>
            {/* <Specification /> */}
          </li>
        </ul>
        <Outlet />
    </>
  );
};

export default Product;