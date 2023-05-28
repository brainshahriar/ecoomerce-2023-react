import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';
import CartItem from '../Cart/CartItem/CartItem'
import "./Cart.scss";

const Cart = ({setShowCart}) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={()=>setShowCart(false)}>
                <MdClose/>
                <span className="text">Close</span>
            </span>
        </div>
        {/* <div className="empty-cart">
            <BsCartX/>
            <span>No Products in thr cart.</span>
            <button className='return-cta'>Return to Shop</button>
        </div> */}
        <CartItem/>
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text"></span>
                <span className="text total">587&#2547;</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
