import Product from "../Products/Product/Product";
import "./Products.scss";
const Products = ({ innerPage,headingText,products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}

      <div className="products">
        {
          products.map((product,index)=>{
            return(
              <Product key={index} product={product} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Products;
