import {React,useContext} from "react";
// import { useAuth } from "../context/GlobalState";
import checkoutImg from "../images/checkoutAd.jpg";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { GlobalContext } from "../context/GlobalState"
const Checkout = () => {

  // const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { user } = context
  // const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" alt="" src={checkoutImg} />
        <div>
          <h3>Hello, {user.name?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {user.basket.length > 0 ? (
            user.basket.map((item) => (
              // item
              <CheckoutProduct
                hub={item}
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
            
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal  />
      </div>
    </div>
  );
};

export default Checkout;
