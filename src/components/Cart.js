import { clearCart, removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);

  // const store = useSelector((store) => store);
  // const cartItems =  store.cart.items;

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-4xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white m-2 p-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Cart is Empty. Add items to the cart</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
