import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({product , onClick}) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={()=> navigate(`/product/${product.id}`)}>
      <div className="thumbnail">
        <img src={`http://localhost:8000/storage/${product.image}`} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{product.title}</span>
        <span className="price">&#2547;{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
