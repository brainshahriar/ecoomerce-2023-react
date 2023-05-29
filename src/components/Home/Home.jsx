import { useContext, useEffect } from "react";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    fetchDataFromApi("/categories").then((res) => {
      setCategories(res.data);
    });
  };

  const getProducts = async () => {
    fetchDataFromApi("/products").then((res) => {
      setProducts(res.data);
    });
  };
  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </>
  );
};

export default Home;
