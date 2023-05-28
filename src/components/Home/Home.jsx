import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText='Popular Products'/>
        </div>
      </div>
    </>
  );
};

export default Home;
