import Products from "../../Products/Products";

const RelatedProducts = ({ products }) => {
    return (
        <div className="related-products">
            <Products
                headingText="Related Products"
                products={products?.related_products}
            />
        </div>
    );
};

export default RelatedProducts;
