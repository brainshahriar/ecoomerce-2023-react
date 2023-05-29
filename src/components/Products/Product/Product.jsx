import "./Product.scss";
const Product = ({product}) => {
  return (
    <div className="product-card">
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
