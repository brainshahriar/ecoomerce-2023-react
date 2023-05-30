import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const Context = createContext();

const Appcontext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartSubTotal, setcartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {}, [cartItems]);

  const handleAddtoCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setcartItems(items);
  };
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
        items = items.filter((p)=> p.id === product.id);
        setcartItems(items);
        
  };
  const handleCartProductQuantity = (type, product) => {};

  return (
    <Context.Provider
      value={{
        categories,
        products,
        setCategories,
        setProducts,
        cartItems,
        setcartItems,
        cartCount,
        setcartCount,
        cartSubTotal,
        setcartSubTotal,
        handleAddtoCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Appcontext;
