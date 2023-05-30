import React from "react";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(`/categories/${id}`);
    return (
        <div className="category-main-content">
            {data && (
                <div className="layout">
                    <div className="category-title">{data.title}</div>
                    <Products products={data.products} />
                </div>
            )}
        </div>
    );
};

export default Category;
