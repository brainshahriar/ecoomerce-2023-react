import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {
  const [scrollValue, setScrollValue] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrollValue(true);
    } else {
      setScrollValue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrollValue ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">ASM STORE.</div>
          <div className="right">
            <TbSearch onClick={()=> setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {
        showCart && <Cart setShowCart={setShowCart}/>
      }
      {
        showSearch && <Search setShowSearch={setShowSearch}/>
      }
    </>
  );
};

export default Header;
