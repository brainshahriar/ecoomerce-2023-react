import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Product.scss";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">samsung</span>
        <span className="price">&#2547;499</span>
      </div>
    </div>
  );
};

export default Product;
