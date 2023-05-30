import Products from "../../Products/Products";

const RelatedProducts = ({products}) => {
    console.log('related products', products);
    return (
        <div className="related-products">
            {
                products &&  <Products headingText='Related Products' products={products.related_products} />
            }
        </div>
    );
};

export default RelatedProducts;
