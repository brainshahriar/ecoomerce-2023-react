import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItems , handleRemoveFromCart,handleCartProductQuantity} = useContext(Context);
  return (
    <div className="cart-products">
      {
        cartItems.map((item,i) => {
          return (
            <div className="cart-product">
            <div className="img-container">
              <img src={`http://localhost:8000/storage/${item.image}`} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.title}</span>
              <MdClose className="close-btn" onClick={()=> {handleRemoveFromCart(item)}}/>
              <div className="quantity-buttons">
                <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
              </div>
              <div className="text">
                <span>{item.quantity}</span>
                <span>X</span>
                <span>&#2547;{item.price * item.quantity}</span>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
  );
};

export default CartItem;
